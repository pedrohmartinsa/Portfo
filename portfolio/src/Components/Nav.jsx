import { useState } from "react";
import { NavLink } from "react-router-dom";
import Bolinha from './assets/bolinha.png'
export default function Nav() {

    const cssItens = 'hover:text-slate-500'

    return(
        <>
            <nav>

                <div className="flex flex-col text-xl font-bold mt-20 gap-y-4">
                    <NavLink className={cssItens} to=''>Home</NavLink>
                    <NavLink className={cssItens} to='about'>About</NavLink>
                    <NavLink className={cssItens} to='projects'>Projects</NavLink>
                    <NavLink className={cssItens} to='certificates'>Certificates</NavLink>
                    <NavLink className={cssItens} to='contact'>Contact</NavLink>
                </div>
            </nav>
            
        </>
    )
}