import { useState } from "react";
import SkillCard from "../Components/SkillCard";
import { CgGym } from "react-icons/cg";
import { FaBookOpen } from "react-icons/fa";
import { MdVideogameAsset } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { SiPython } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPycharm } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export default function About() {

    const habilidades = [
        {name: 'Python', icon:<SiPython size={30}/>},
        {name: 'JavaScript', icon: <IoLogoJavascript size={30}/>},
        {name: 'HTML5', icon:<SiHtml5 size={30}/>},
        {name: 'CSS', icon: <IoLogoCss3 size={30}/>},
        {name: 'React', icon:<FaReact size={30}/>},
        {name: 'Vite', icon: <SiVite size={30}/>},
        {name: 'Excel', icon: <PiMicrosoftExcelLogoFill size={30}/>},
        {name: 'Github', icon: <FaGithub size={30}/>}
        
    ]

    const ferramentas = [
        {name: 'VSCode', icon:<VscVscode size={30}/>},
        {name: 'PyCharm', icon:<SiPycharm size={30}/>},
        {name: 'NodeJS', icon:<FaNodeJs size={30}/>}
    ]

    return(
        <>
            <div className="flex flex-col gap-20 text-[13px] md:text-lg font-bold">
                <div className="flex flex-col gap-3">
                    <h2 className="text-lg">Coisas que gosto de fazer:</h2>
                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-3">
                            <CgGym size={30}/>
                            Treinar
                        </li>

                        <li className="flex items-center gap-3">
                            <FaBookOpen size={30}/>
                            Ler
                        </li>

                        <li className="flex items-center gap-3">
                            <MdVideogameAsset size={30}/>
                            Jogar Vídeo Game
                        </li>

                        <li className="flex items-center gap-3">
                            <TiGroup size={30}/>
                            Sair com meus amigos
                        </li>
                    </ul>

                </div>

                <div className="flex flex-col gap-10">

                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg">Habilidades:</h2>

                        <div className="flex justify-center flex-wrap gap-9 max-w-6xl mx-auto">
                            {
                                habilidades.map((hab) => (
                                    <SkillCard 
                                    icon= {hab.icon}
                                    name= {hab.name} />
                                ))
                            }
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">

                        <h2 className="text-lg">Ferramentas:</h2>
                        <div className="flex justify-center flex-wrap gap-9 max-w-6xl mx-auto">
                            {
                                ferramentas.map((hab) => (
                                    <SkillCard 
                                    icon= {hab.icon}
                                    name= {hab.name} />
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}