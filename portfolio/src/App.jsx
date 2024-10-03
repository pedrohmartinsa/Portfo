import { Outlet } from "react-router-dom"
import Nav from "./Components/Nav"
import Footer from './Components/Footer'


function App() {
  

  return (
    <>

      <div className="relative flex items-center justify-center w-screen h-screen bg-white">

        <div className="fixed z-[1000] flex flex-col justify-between py-10 border-2 border-black w-[90%] h-[90%]">

          <div className="fixed ">
            <Nav/>
          </div>
          

          <div className="absolute bottom-0 right-0 h-[50%] w-full overflow-y-scroll md:h-[40%] pl-16 md:pl-0 md:p-7 md:mr-4 md:w-72">
          <Outlet/>
          </div>
        </div>

        <div className="absolute bottom-[-1px] mb-1 w-[100vw] py-4 px-4 md:px-[2.5rem] md:py-[2.5rem] lg:px-[3.125rem] xl:px-[4.375rem] 2xl:px-[8.75rem]">

        <Footer/>

        </div>

      </div>
      
    
    </>
  )
}

export default App
