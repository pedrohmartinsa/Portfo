import { Outlet } from "react-router-dom"
import Nav from "./Components/Nav"
import RedesSocias from "./Components/RedesSociais"


function App() {
  

  return (
    <>
      <div className="relative md: flex w-full h-screen p-12">

          <main className=" p-12 border-2 w-[100%] border-black">

                <div className="flex items-center justify-between">

                  <div>
                      <h1 className="font-mono font-bold text-6xl">Pedro Henrique Martins</h1>
                      <h3 className="font-mono font-bold text-3xl">Estudante de Engenharia de Software</h3>
                  </div>

                  <RedesSocias/>

                </div>

            <div className="flex justify-between items-center">

              <Nav/>
              
              <div className="absolute mr-40 right-40 mb-40 bottom-40">
                <Outlet/>
              </div>

            </div>
            
          </main>

      </div>

      
    </>
  )
}

export default App
