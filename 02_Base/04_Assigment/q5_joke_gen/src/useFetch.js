// Import necessary hooks from React
import { useState, useEffect } from "react";

// Custom hook for fetching data from a given URL
const useFetch = (url) => {
  // State variables for data, loading status, and error handling
  const [data, setData] = useState({}); // Store fetched data
  const [loading, setLoading] = useState(false); // Track loading status
  const [error, setError] = useState(null); // Store potential errors during fetching

  // Function to fetch data from the given URL asynchronously
  const getJoke = async () => {
    try {
      // Start loading (set loading to true)
      setLoading(true);
      // Fetch data from the provided URL
      const res = await fetch(url);
      // Parse the response as JSON
      const data = await res.json();
      // Log the fetched data (for demonstration purposes)
      console.log(data);
      // Update the 'data' state variable with the fetched data
      setData(data);
    } catch (error) {
      // Handle errors by logging them and updating the 'error' state variable
      console.log(error);
      setError(error);
    } finally {
      // After fetching (whether successful or not), set loading to false
      setLoading(false);
    }
  };

  // useEffect hook to execute the 'getJoke' function when the component mounts (empty dependency array)
  useEffect(() => {
    // Call the 'getJoke' function to initiate the data fetching process
    getJoke();
  }, []); // The empty dependency array ensures this effect runs once after the initial render

  // Return an object containing the fetched data, loading status, error, and the 'getJoke' function for re-fetching
  return { data, loading, error, getJoke };
};

// Export the custom hook for use in other components
export default useFetch;
