import CertificatesCard from "../Components/Certificates/CertificatesCard";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";

import { MdDesignServices } from "react-icons/md";
import { SiGumtree } from "react-icons/si";
import { SiThealgorithms } from "react-icons/si";

import { FaPython } from "react-icons/fa";
import CertificatesBox from "../Components/Certificates/CertificatesBox";

export default function Certificates() {

    const certificadosAlura = [
        {texto:'Excel: domine o editor de planilhas.', icon1:<PiMicrosoftExcelLogoFill size={20}/>, icon2: ''},
        {texto:'HTML e CSS: cabeçalho e váriaveis CSS.', icon1:<FaHtml5 size={20}/>, icon2: <IoLogoCss3 size={20}/>},
        {texto:'HTML e CSS: ambientes de desenvolvimento estrutura de arquivos e tags.', icon1:<FaHtml5 size={20}/>, icon2: <IoLogoCss3 size={20}/>},
        {texto:'HTML e CSS: Classes, posicionamentos e Flexbox.', icon1:<FaHtml5 size={20}/>, icon2: <IoLogoCss3 size={20}/>},
        {texto:'Praticando CSS: Grid e Flexbox.', icon1:<IoLogoCss3 size={20}/>, icon2:''},
        {texto:'React: configurando e estruturando projetos com Vite.', icon1:<FaReact size={20}/>, icon2: <SiVite size={20}/>},
        {texto:'Lógica da programação: explore funções e listas.', icon1:<IoLogoJavascript size={20}/>, icon2: ''},
        {texto:'Lógica de programação: mergulhe em programação com JavaScript.', icon1:<IoLogoJavascript size={20}/>, icon2: ''}
    ]

    const certificadosFiap = [
        {texto: 'Design Thinking - Process', icon1: <MdDesignServices/>, icon2: ''},
        {texto: 'Formação Social e Sustentabilidade', icon1: <SiGumtree/>, icon2: ''},
        {texto: 'Algoritmos: Aprenda a Programar', icon1: <SiThealgorithms/>, icon2: ''}
    ]

    const certificadosCursoEmVideo = [
        {texto: 'Python 3 - Mundo 1', icon1: <FaPython/>, icon2: ''},
        {texto: 'Python 3 - Mundo 2', icon1: <FaPython/>, icon2: ''},
        {texto: 'Python 3 - Mundo 3', icon1: <FaPython/>, icon2: ''}
    ]

    return(
        <>
            <div className="text-black flex flex-col gap-6">
                <h3 className="text-2xl font-bold self-center">Certificados</h3>

                <CertificatesBox
                titulo= 'Alura'
                certificadosNome={certificadosAlura}
                />

                <CertificatesBox
                titulo= 'FIAP'
                certificadosNome = {certificadosFiap} />

                <CertificatesBox
                titulo= 'Curso Em Vídeo'
                certificadosNome = {certificadosCursoEmVideo} />


            </div>
        </>
    )
}