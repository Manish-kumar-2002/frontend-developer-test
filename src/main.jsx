import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import ErrorPage from "./components/ErrorPage"
import About from "./components/About"
import Branding from "./components/Branding"


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/branding",
        element:<Branding />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
