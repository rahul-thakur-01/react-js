// Import necessary styles and the custom useFetch hook
import "./styles.css";
import useFetch from './useFetch';

// App component definition
export default function App() {
  // API URL for fetching programming jokes
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";

  // Use the custom hook to fetch data from the specified URL
  const { data, loading, error, getJoke } = useFetch(url);

  // Display loading message while fetching data
  if (loading) {
    return <p>Loading...</p>;
  }

  // Display error message if there's an error during fetching
  if (error) {
    console.log(error);
    return <p>Something went wrong...</p>;
  }

  // Render the main content once data is loaded
  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <h2>{data.joke}</h2> {/* Display the fetched joke */}
      <button className="btn" onClick={getJoke}>New Joke</button> {/* Button to fetch a new joke */}
    </div>
  );
}
