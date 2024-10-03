export default function CertificatesCard( {icon1, icon2, texto} ) {
    return(
        <>
            <div className="mr-2 p-2 justify-center items-center hover:bg-slate-100 duration-300 border-black border-2 gap-4 rounded-md">
                <div className="flex items-center justify-start gap-1">
                    {icon1}
                    {icon2}
                </div>
                <p>{texto}</p>
            </div>
        </>
    )
}