import { NavLink } from "react-router-dom";

export default function Nav() {



    return(
        <>
        <div className="ml-4 md:p-10">

            <div className="flex flex-col gap-4">
                <h1 className="text-2xl md:text-[50px] font-serif">Pedro Henrique Martins</h1>
                <h2 className="text-xl md:text-[30px] font-serif">Engenheiro de Software</h2>
            </div>

            <div className="flex flex-col w-24 text-[12px] md:text-[18px] font-bold mt-8 gap-4">
                <NavLink className='md:hover:text-slate-500' to='/'>Home</NavLink>
                <NavLink className='md:hover:text-slate-500' to='about'>About</NavLink>
                <NavLink className='md:hover:text-slate-500' to='projects'>Projects</NavLink>
                <NavLink className='md:hover:text-slate-500' to='certificates'>Certificates</NavLink>
                <NavLink className='md:hover:text-slate-500' to='contact'>Contact</NavLink>
            </div>
        </div>
            

        </>
    )
}