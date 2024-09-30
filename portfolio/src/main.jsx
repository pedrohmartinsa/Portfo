import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import SocialMedia from './pages/SocialMedia.jsx'
import Certificates from './pages/Certificates.jsx'

const router = createBrowserRouter
(
  [
    {
      path: "/",
      element: <App/>,

      children: [
        {path: "/", element: <Home/>},
        {path: "projects", element: <Projects/>},
        {path: "socialMedia", element: <SocialMedia/>},
        {path: "certificates", element: <Certificates/>},
        {path: "contact", element: <Contact/>}
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
