import { Outlet } from "react-router-dom"
import Nav from "./Components/Nav"


function App() {
  

  return (
    <>
      <div className="">

        <main className="">
          <Nav/>
          <Outlet/>
        </main>

      </div>
      
    </>
  )
}

export default App
