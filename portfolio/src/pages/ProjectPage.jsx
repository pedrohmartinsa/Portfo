import { useParams, Link } from "react-router-dom"
import { IoArrowBackCircle } from "react-icons/io5"
import { CiLink } from "react-icons/ci";

export default function ProjectPage() {

    const {id, nome, sobre, repositorio} = useParams()

    const repositorios = {
        culturama: "https://github.com/pedrohmartinsa/culturama"
    }

    return(
        <>

            <div className="flex flex-col items-center gap-7">
                <div className="flex gap-4">
                    <Link to='/projects' className="hover:text-slate-700 mt-1">
                        <IoArrowBackCircle size={30}/>
                    </Link>
                    <h2 className="text-2xl font-bold w-48">{nome}</h2>
                </div>
                
                <div className="flex flex-col items-center gap-10">

                    <div className="flex flex-col items-center gap-3">
                        <h3 className="font-bold text-xl">Sobre o Projeto</h3>
                        <p className="text-justify mr-3">{sobre}</p>
                    </div>

                    
                    <a className="flex items-center justify-center border border-black w-36 h-11 rounded-lg gap-2 font-bold cursor-pointer hover:text-white hover:bg-black" href="https://github.com/pedrohmartinsa/culturama">
                        <CiLink size={25}/>
                        Repositório
                    </a>

                </div>
            </div>
        </>
    )
}