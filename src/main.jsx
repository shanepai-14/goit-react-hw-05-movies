import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MovieDetails from './components/MovieDetails.jsx'
import Cast from './components/Cast.jsx'
import Reviews from './components/Reviews.jsx'
import Layout from './layout.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
       {
        path: '/goit-react-hw-05-movies',
        element: <App />,
      
      },
      {
        path: 'goit-react-hw-05-movies/search/:query',
        element: <App />,
      
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetails/>,
        children: [
          {
            path: 'cast',
            element: <Cast />,
          },
          {
            path: 'reviews',
            element: <Reviews />,
          },
        ],
      }
    ]
  }

  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
