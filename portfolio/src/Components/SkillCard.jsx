export default function SkillCard( {icon, name} ) {
    return(
        <>
        <div className="flex items-center justify-center border-primary border-2 w-20 h-20 group p-10 bg-primary/[.04] dark:bg-white/[.04] rounded-lg transform transition-transform hover:scale-125">
            <div className="group-hover:translate-y-[-10px]  transition-transform duration-150">
                <div className="">
                    {icon}
                </div>
            </div>
            <span className="text-sm opacity-0 group-hover:opacity-100 absolute bottom-2 left-1/2 transform -translate-x-1/2 duration-150">{name}</span>
        </div>
        </>
    )
}