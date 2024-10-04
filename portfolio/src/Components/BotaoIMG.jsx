import React from "react"

export default function BotaoIMG( { titulo, foto } ) {
    return(
        <>
            <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>{titulo}</button>
            <dialog id="my_modal_3" className="modal">
            <div className="modal-box">

                <form method="dialog">
                
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                
                </form>

                <img src={foto} alt="Certificado" className="max-w-full h-auto"/>
                <p>{foto}</p>
            </div>
            </dialog>
        </>
    )
}