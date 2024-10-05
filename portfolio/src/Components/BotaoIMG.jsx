import React from "react"


export default function BotaoIMG( { titulo, foto, icon } ) {
    return(
        <>
            <button className="flex items-center btn bg-secondary text-primary hover:text-secondary hover:bg-primary" onClick={()=>document.getElementById('my_modal_3').showModal()}>
                {icon}    
                {titulo}
            </button>
            <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                
                <form method="dialog">
                
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-primary text-secondary">✕</button>
                
                </form>

                <img src={foto} alt="Certificado" className="max-w-full h-auto"/>
            </div>
            </dialog>
        </>
    )
}