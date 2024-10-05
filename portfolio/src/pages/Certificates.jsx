import CursoEmVideo from '../data/cursoEmVideo.json'
import Alura from '../data/alura.json' 
import Fiap from '../data/fiap.json'

import { TbCertificate } from "react-icons/tb";
import CertificatesBox from "../Components/CertificatesBox";



export default function Certificates() {

    return(
        <>
            <div className="flex flex-col items-center gap-6">
                <div className='flex items-center gap-3'>
                    <TbCertificate size={30}/>
                    <h3 className="text-2xl font-bold self-center">Certificados</h3>
                </div>

                
                <CertificatesBox 
                titulo='Alura'
                json={Alura}/>

                <CertificatesBox
                titulo='Fiap'
                json={Fiap}/>

                <CertificatesBox
                titulo= 'Curso Em Vídeo'
                json = {CursoEmVideo} />



            </div>

        </>
    )
}