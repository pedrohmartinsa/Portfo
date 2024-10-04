import CursoEmVideo from '../data/cursoEmVideo.json'
import Alura from '../data/alura.json' 
import Fiap from '../data/fiap.json'

import CertificatesBox from "../Components/Certificates/CertificatesBox";


export default function Certificates() {

    return(
        <>
            <div className="text-black flex flex-col gap-6">
                <h3 className="text-2xl font-bold self-center">Certificados</h3>

                
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