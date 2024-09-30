import { NavLink } from "react-router-dom";

export default function Nav() {
    return(
        <>
            <nav>

                <div>
                    <h1 className="">Pedro</h1>
                    <h3>Estudante de Engenharia de Software</h3>
                </div>

                <div>
                    <NavLink to=''>Home</NavLink>
                    <NavLink to='projects'>Projects</NavLink>
                    <NavLink to='socialMedia'>Social Media</NavLink>
                    <NavLink to='certificates'>Certificates</NavLink>
                    <NavLink to='contact'>Contact</NavLink>
                </div>
            </nav>
            
        </>
    )
}