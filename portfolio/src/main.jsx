import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Certificates from './pages/Certificates.jsx'
import Projects from './pages/Projects.jsx'
import CertificatePage from './pages/CertificatePage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'

const router = createBrowserRouter
(
  [
    {
      path: "/",
      element: <App/>,

      children: [
        {path: "/", element: <Home/>},
        {path: "about", element: <About/>},
        {path: "projects", element: <Projects/>},
        {path: "projects/:id/:nome/:sobre", element: <ProjectPage/>},
        {path: "certificates", element: <Certificates/>},
        {path: "certificates/:id/:titulo/:tempo/:conteudo/:foto", element: <CertificatePage/>},
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
