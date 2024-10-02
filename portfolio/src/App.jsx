import { Outlet } from "react-router-dom"
import Nav from "./Components/Nav"
import Footer from './Components/Footer'


function App() {
  

  return (
    <>
    
      <Nav/>
      <div className="mt-20">
      <Outlet/>
      </div>
      <Footer/>
    
    </>
  )
}

export default App
