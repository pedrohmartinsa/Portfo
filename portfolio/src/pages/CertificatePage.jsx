import { useParams } from "react-router-dom"
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import BotaoIMG from "../Components/BotaoIMG";
import { MdOutlineWatchLater } from "react-icons/md";
import { LiaCertificateSolid } from "react-icons/lia";

export default function CertificatePage() {

    const {id, titulo, tempo, conteudo, foto} = useParams()

    const iconCertificado = <LiaCertificateSolid size={20}/>

    return(
        <>
        <div className="">

            
            

            <div className="flex flex-col items-center gap-7">
                <div className="flex gap-4">
                    <Link to='/certificates' className="hover:text-slate-700 mt-1">
                        <IoArrowBackCircle size={30}/>
                    </Link>
                    
                    <h2 className="text-2xl font-bold w-auto">{titulo}</h2>
                </div>
                
                <div className="flex items-center gap-1">
                    <MdOutlineWatchLater size={20}/>
                    <p className="font-bold">Tempo de duração: <span className="font-normal">{tempo}</span> </p>
                </div>
                
                <div className="flex flex-col items-center gap-10">

                    <div className="flex flex-col items-center gap-3">
                        <h3 className="font-bold text-xl">Assuntos Abordados</h3>
                        <p className="text-justify mr-3 w-auto">{conteudo}</p>
                    </div>
                    
                    <BotaoIMG
                    icon={iconCertificado}
                    titulo= 'Certificado'
                    foto= {`/${foto}`}/>

                </div>
            </div>

        </div>
            
        </>
    )
}