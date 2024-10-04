import { useParams } from "react-router-dom"
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import BotaoIMG from "../Components/BotaoIMG";

export default function CertificatePage() {

    const {id, titulo, tempo, conteudo, foto} = useParams()
    

    return(
        <>
        <div className="text-black ">
            <Link to='/certificates' className="hover:text-slate-700">
                <IoArrowBackCircle size={30}/>
            </Link>
            

            <div className="flex flex-col items-center gap-7">
                <h2 className="text-3xl font-bold">{titulo}</h2>
                <p className="font-bold">Tempo de duração: <span className="font-normal">{tempo}</span> </p>
                
                <div className="flex flex-col items-center gap-10">

                    <div className="flex flex-col items-center gap-3">
                        <h3 className="font-bold text-xl">Assuntos Abordados</h3>
                        <p className="text-justify mr-3">{conteudo}</p>
                    </div>

                    <BotaoIMG
                    titulo= 'Certificado'
                    foto= {foto}/>

                </div>
            </div>

        </div>
            
        </>
    )
}