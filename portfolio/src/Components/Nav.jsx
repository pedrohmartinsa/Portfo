import { NavLink } from "react-router-dom";
import { CiLink } from "react-icons/ci";

export default function Nav() {



    return(
        <>
        <div className="ml-4 md:p-10">

            <div className="flex flex-col gap-4">
                <h1 className="text-2xl md:text-[50px] font-serif">Pedro Henrique Martins</h1>
                <h2 className="text-xl md:text-[30px] font-serif">Engenheiro de Software</h2>
            </div>

            <div className="flex flex-col w-24 text-[12px] md:text-[18px] font-bold mt-8 gap-4 transition-all duration-300">
                <NavLink className='md:hover:text-slate-500' to='/'>Home</NavLink>
                <NavLink className='md:hover:text-slate-500' to='about'>About</NavLink>
                <NavLink className='md:hover:text-slate-500' to='projects'>Projects</NavLink>
                <NavLink className='md:hover:text-slate-500 w-32' to='certificates'>Certificates</NavLink>
                <NavLink className='md:hover:text-slate-500' to='contact'>Contact</NavLink>
                <a className="flex items-center justify-center border border-primary w-12 h-11 rounded-2xl gap-2 font-bold cursor-pointer hover:text-secondary hover:bg-primary" href="https://github.com/pedrohmartinsa/Portfo">
                        <CiLink size={25}/>
                </a>
            </div>
        </div>
            

        </>
    )
}