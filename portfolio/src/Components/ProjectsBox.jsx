import { IoCodeWorking } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function ProjectsBox( { json } ) {

    const icons = {
        projeto: <IoCodeWorking/>
    }

    const repositorio = {
        
    }

    return(
        <>
            <div className="flex justify-center flex-wrap gap-9 max-w-6xl mx-auto">
                
                <div className="flex flex-col justify-center flex-wrap gap-9 max-w-6xl mx-auto">
                    {
                        json
                        .map((detalhes) => (
                            <Link to= {`/projects/${detalhes.id}/${detalhes.nome}/${detalhes.sobre}`}
                                className="flex flex-col mr-2 p-2 w-48 justify-center items-center hover:bg-black hover:text-white duration-300 border-black border-2 gap-4 rounded-md">
                                <div className="self-start gap-1">
                                    {icons[detalhes.icon]}
                                </div>
                                <h2 className="text-xl mb-7">{detalhes.nome}</h2>
                            </Link>
                        ))
                    }
                </div>

            </div>
        </>
    )
}