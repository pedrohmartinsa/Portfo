import { Outlet } from "react-router-dom"
import Nav from "./Components/Nav"
import Footer from './Components/Footer'


function App() {
  

  return (
    <>
    
      <div className="relative flex items-center justify-center w-full h-screen">

        <div className="py-10 border-2 border-black w-[95%] h-[90%]">

        </div>
        <div className="absolute bottom-[-35px]">

        <Footer/>
        </div>

      </div>
      
    
    </>
  )
}

export default App
