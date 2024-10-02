import { useState } from "react";
import { NavLink } from "react-router-dom";
import Bolinha from './assets/bolinha.png';


export default function Nav() {

    const cssItens = 'text-sm font-bold'

    return(
        <>


            <div className="drawer p-4 text-">

                <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                        <defs><linearGradient x1="12.373" y1="0.373" x2="34.611" y2="22.611" gradientUnits="userSpaceOnUse" id="color-1_eofQ1g5BaAx6_gr1"><stop offset="0" stop-color="#ff0000"></stop><stop offset="1" stop-color="#000001"></stop></linearGradient><linearGradient x1="12.373" y1="12.373" x2="34.611" y2="34.611" gradientUnits="userSpaceOnUse" id="color-2_eofQ1g5BaAx6_gr2"><stop offset="0" stop-color="#ff0000"></stop><stop offset="1" stop-color="#000001"></stop></linearGradient><linearGradient x1="12.373" y1="24.373" x2="34.611" y2="46.611" gradientUnits="userSpaceOnUse" id="color-3_eofQ1g5BaAx6_gr3"><stop offset="0" stop-color="#ff0000"></stop><stop offset="1" stop-color="#000001"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M42,15h-36c-1.65,0 -3,-1.35 -3,-3v0c0,-1.65 1.35,-3 3,-3h36c1.65,0 3,1.35 3,3v0c0,1.65 -1.35,3 -3,3z" fill="url(#color-1_eofQ1g5BaAx6_gr1)"></path><path d="M42,27h-36c-1.65,0 -3,-1.35 -3,-3v0c0,-1.65 1.35,-3 3,-3h36c1.65,0 3,1.35 3,3v0c0,1.65 -1.35,3 -3,3z" fill="url(#color-2_eofQ1g5BaAx6_gr2)"></path><path d="M42,39h-36c-1.65,0 -3,-1.35 -3,-3v0c0,-1.65 1.35,-3 3,-3h36c1.65,0 3,1.35 3,3v0c0,1.65 -1.35,3 -3,3z" fill="url(#color-3_eofQ1g5BaAx6_gr3)"></path></g></g>
                    </svg>
                    </label>
                </div>
                
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-32 p-4">
                    {/* Sidebar content here */}
                    <li><NavLink className={cssItens} to=''>Home</NavLink></li>
                    <li><NavLink className={cssItens} to='about'>About</NavLink></li>
                    <li><NavLink className={cssItens} to='projects'>Projects</NavLink></li>
                    <li><NavLink className={cssItens} to='certificates'>Certificates</NavLink></li>
                    <li><NavLink className={cssItens} to='contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}