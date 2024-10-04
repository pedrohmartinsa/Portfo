import { Link } from "react-router-dom";
import { FaPython } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { SiGumtree } from "react-icons/si";
import { SiThealgorithms } from "react-icons/si";

export default function CertificatesBox( { titulo, json } ) {
    
    const icons = { 
        python: <FaPython/>,
        excel: <PiMicrosoftExcelLogoFill/>,
        html: <FaHtml5/>,
        css: <IoLogoCss3/>,
        react: <FaReact/>,
        vite: <SiVite/>,
        js: <IoLogoJavascript/>,
        design: <MdDesignServices/>,
        sustenta: <SiGumtree/>,
        algoritm: <SiThealgorithms/>
}
    
    return(

        <>
            <div className="flex flex-col items-center gap-4">

                <h4 className="text-xl font-bold">{titulo}</h4>

                <div className="flex justify-center flex-wrap gap-9 max-w-6xl mx-auto">
                    <div className="flex justify-center flex-wrap gap-9 max-w-6xl mx-auto">
                        {
                            json
                            .map((detalhes) => (
                                <Link to= {`/certificates/${detalhes.id}/${detalhes.titulo}/${detalhes.tempo}/${detalhes.conteudo}/${detalhes.foto}`}
                                    className="mr-2 p-2 justify-center items-center hover:bg-slate-100 duration-300 border-black border-2 gap-4 rounded-md">
                                    <div className="flex items-center justify-start gap-1">
                                        {icons[detalhes.icon1]}
                                        {icons[detalhes.icon2]}
                                    </div>
                                    <p>{detalhes.titulo}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>

            </div>
        </>
    )
}