import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return(
        <>
            <footer className="flex flex-col items-center py-7 gap-y-10 bg-stone-800 text-white sm:flex-row sm:justify-between sm:px-6">

                <h3>Desenvolvido por Pedro Henrique</h3>

                <h3>Copyright © PH</h3>

                <div className="flex gap-x-5">

                    <a href="https://www.linkedin.com/in/pedrohmas/">
                        <FaLinkedin size={30} color="white"/>
                    </a>

                    <a href="https://www.github.com/pedrohmartinsa/">
                        <FaGithubSquare size={30} color="white"/>
                    </a>

                    <a href="https://www.instagram.com/pedroo_hmas/">
                        <AiFillInstagram size={30} color="white"/>
                    </a>

                    <a href="mailto:pedroshenriquepsantos@gmail.com">
                        <MdEmail size={30} color="white"/>
                    </a>

                </div>

                

            </footer>
            
        </>
    )
}