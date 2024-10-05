import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return(
        <>
            <footer className="flex justify-between text-primary w-full
                                ">

                <h3 className="text-xs font-bold text-slate-700">Copyright © PH</h3>

                <div className="flex justify-between gap-x-5">

                    <a href="https://www.linkedin.com/in/pedrohmas/">
                        <FaLinkedin color="black" size={20}/>
                    </a>

                    <a href="https://www.github.com/pedrohmartinsa/">
                        <FaGithubSquare color="black" size={20}/>
                    </a>

                    <a href="https://www.instagram.com/pedroo_hmas/">
                        <AiFillInstagram  color="black" size={20}/>
                    </a>

                    <a href="mailto:pedroshenriquepsantos@gmail.com">
                        <MdEmail color="black" size={20}/>
                    </a>

                </div>

                

            </footer>
            
        </>
    )
}