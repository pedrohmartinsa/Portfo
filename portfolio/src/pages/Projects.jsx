import ProjectsBox from "../Components/ProjectsBox";
import Projetos from '../data/projetos.json'
export default function Projects() {
    return(
        <>
            <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold self-center">Projetos</h3>

                
                <ProjectsBox 
                json= {Projetos}/>



            </div>
        </>
    )
}