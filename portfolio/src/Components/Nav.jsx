import { useState, useEf } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";


export default function Nav() {

    const cssItens = 'text-sm font-bold'

    let [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
      };

    return(
        <>
                <div className="drawer p-4 text-">

                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                    <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content" onClick={() => setOpen(!open)}>
                            <label htmlFor="my-drawer-4" className="drawer-button">
                                <IoMenu size={30}/>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                <li><NavLink onClick={closeMenu} className={cssItens} to=''>Home</NavLink></li>
                                <li><NavLink onClick={closeMenu} className={cssItens} to='about'>About</NavLink></li>
                                <li><NavLink onClick={closeMenu} className={cssItens} to='projects'>Projects</NavLink></li>
                                <li><NavLink onClick={closeMenu}  className={cssItens} to='certificates'>Certificates</NavLink></li>
                                <li><NavLink onClick={closeMenu} className={cssItens} to='contact'>Contact</NavLink></li>
                                </ul>
                        </div>
                    </div>
            </div>
        </>
    )
}