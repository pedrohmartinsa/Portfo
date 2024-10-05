import ProjectsBox from "../Components/ProjectsBox";
import Projetos from '../data/projetos.json'
import { GoProjectRoadmap } from "react-icons/go";

export default function Projects() {
    return(
        <>
            <div className="flex flex-col items-center gap-6">
                <div className="flex gap-3 items-center mr-3">
                    <GoProjectRoadmap size={30}/>
                    <h3 className="text-2xl font-bold self-center">Projetos</h3>
                </div>

                
                <ProjectsBox 
                json= {Projetos}/>



            </div>
        </>
    )
}