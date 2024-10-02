import { useState, useEffect } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { SiDragonframe } from "react-icons/si";
import { FaCircle } from "react-icons/fa6";

import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";



export default function Nav() {

    let Links = [
        {name: "Home", link:"/"},
        {name: "About", link:"about"},
        {name: "Projects", link:"projects"},
        {name: "Certificates", link:"certificates"},
        {name: "Contact", link:"contact"},
    ]

    let [open, setOpen]=useState(false)
    let [isScrolled, setIsScrolled] = useState(false)

    const closeMenu = () => {
        setOpen(false);
      };

    const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
    }
      };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <>
                <div className={`shadow-md w-full fixed top-0 left-0 ${isScrolled ? 'backdrop-blur-lg bg-[#43091c] bg-opacity-50' : 'bg-transparent'}`}>

                    <div className="items-center justify-between bg-white py-4  px-7
                                    md:flex md:px-10">

                        <div className="font-bold text-4xl pt-2 cursor-pointer flex items-center text-gray-800">

                            <span className="text-4xl mr-1">
                                <SiDragonframe />
                            </span>
                            PH

                        </div>

                        <div onClick={()=>setOpen(!open)} className="text-3xl text-black absolute right-8 top-6 cursor-pointer
                                                                    md:hidden">
                            {open ? <IoMdClose/> : <IoMenu/>}
                        </div>
                        <ul className={`pb-12 absolute bg-white z-[-1] left-0 w-full pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}
                                        md:flex md:static md:items-center md:pb-0 md:z-auto md:w-auto md:pl-0`}>

                            {
                                Links.map((link) => (
                                    <li key={link.name} className="text-xl my-7 
                                                                    md:ml-8 md:my-0">
                                        <NavLink onClick={() => setOpen(!open)} className="text-gray-800 hover:text-gray-400 duration-500" to={link.link}> {link.name} </NavLink>
                                    </li>
                                ))
                            }

                           <Button>
                                Get
                           </Button>

                        </ul>

                    </div>

                </div>
                                

                  
        </>
    )
}