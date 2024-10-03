import CertificatesCard from "./CertificatesCard"

export default function CertificatesBox( { titulo, certificadosNome } ) {
    return(
        <>
            <div className="flex flex-col items-center gap-4">

                <h4 className="text-xl font-bold">{titulo}</h4>

                <div className="flex justify-start flex-wrap gap-9 max-w-6xl mx-auto">
                    {
                        certificadosNome.map((detalhes) => (
                            <CertificatesCard
                            icon1= {detalhes.icon1}
                            icon2= {detalhes.icon2}
                            texto= {detalhes.texto}/>
                        ))
                    }
                </div>

            </div>
        </>
    )
}