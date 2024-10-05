import { Outlet } from "react-router-dom"
import { useState } from "react"
import Nav from "./Components/Nav"
import Footer from './Components/Footer'




function App() {

  return (
    <>
      <div className='text-primary bg-secondary'>

          <div className="relative flex items-center justify-center w-screen h-screen">


            <div className="fixed z-[1000] flex flex-col justify-between py-10 border-2 border-primary w-[90%] h-[90%]">

              <div className="fixed ">
                <Nav/>
              </div>
              

              <div className="absolute mr-7 bottom-0 right-0 h-[50%] w-[80vw] overflow-y-scroll md:h-[40%] pl-12 md:pl-0 md:p-7 md:mr-4 md:w-72">
              <Outlet/>
              </div>
            </div>
            
            

            <div className="fixed bottom-[-1px] mb-1 w-[100vw] py-4 px-8 md:px-[3rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem]">

            <Footer/>

            </div>

          </div>

      </div>
      
    
    </>
  )
}

export default App
