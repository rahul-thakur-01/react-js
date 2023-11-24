import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";
import Chapter from "./pages/app/chapter/Chapter";
import Page404 from "./pages/misc/Page404/Page404";


import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Learn from "./pages/app/learn/Learn";
function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element : <Nav/>,
      errorElement: <Page404/>,
      children: [
          {index: true, element: <Hero/>},
          {
            path: 'courses',
            children : [
              {index: true, element: <Courses/>},
              {path : ':id' , element: <Details/>}
            ]

          },
          {
            path: '/learn/:id',
            element : <Learn/>,
            children:[
              {
                path: 'chapter/:chapterId',
                element: <Chapter/>
              }
            ]
          }
      ]
    }
  ])

  return (
    
    <RouterProvider router={browserRouter}/> 

  );
}

export default App;
