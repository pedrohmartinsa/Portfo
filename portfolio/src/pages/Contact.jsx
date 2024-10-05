import { useState } from "react"

export default function Contact() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    
    const handleContato = (e) => {

        e.preventDefault()

        console.log(`Nome: ${nome} • Email: ${email} • Mensagem: ${mensagem}`)

        setNome = ('')
        setEmail = ('')
        setMensagem = ('')
}

    return(
        <>
        <div className="ml-2 flex flex-col gap-3">

                <h3 className="text-lg font-bold">Caso queira me contatar, basta preencher os campos abaixo.</h3>

                <form onSubmit={handleContato} className="flex flex-col items-start" required>
                    
                    <div className="flex flex-col">

                        <label htmlFor="nome">Nome:</label>
                        <input 
                            type="text" 
                            id="nome"
                            className="text-black border-black bg-white border rounded-md h-8 "
                            value={nome}
                            onChange={e => setNome (e.target.value)}
                            />

                    </div>

                    <div className="flex flex-col">

                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="nome"
                            className="text-black border-black bg-white border rounded-md h-8"
                            value={email}
                            onChange={e => setEmail (e.target.value)}
                            />

                    </div>

                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea  
                        id="mensagem"
                        cols="30"
                        rows="10"
                        className="text-black bg-white border border-black rounded-md"
                        value={mensagem}
                        onChange={e => setMensagem (e.target.value)}
                    >

                    </textarea>
                
                    <button type="submit" className="bg-white mt-5 text-black self-end w-24 h-10 hover:text-white hover:bg-black border-2 border-black rounded-md">Enviar</button>

                </form>

        </div>
        </>
    )
}