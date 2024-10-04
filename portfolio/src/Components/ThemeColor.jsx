
export default function ThemeColor( {theme, handleThemeChange} ) {


    return(
        <>

        <div>

            <div className="form-control">
                <label className="label cursor-pointer gap-4">
                    <span className="label-text">Default</span>
                    <input type="radio" name="theme-radios" className="radio theme-controller" value="default" onChange={handleThemeChange} checked={theme === 'default'}/>
                </label>
            </div>

            <div className="form-control">
                <label className="label cursor-pointer gap-4">
                    <span className="label-text">Retro</span>
                    <input type="radio" name="theme-radios" className="radio theme-controller" value="retro" onChange={handleThemeChange} checked={theme === 'retro'}/>
                </label>
            </div>

            <div className="form-control">
                <label className="label cursor-pointer gap-4">
                    <span className="label-text">Cyberpunk</span>
                    <input type="radio" name="theme-radios" className="radio theme-controller" value="cyberpunk" onChange={handleThemeChange} checked={theme === 'cyberphunk'}/>
                </label>
            </div>

            <div className="form-control">
                <label className="label cursor-pointer gap-4">
                    <span className="label-text">Valentine</span>
                    <input type="radio" name="theme-radios" className="radio theme-controller" value="valentine" onChange={handleThemeChange} checked={theme === 'valentine'}/>
                </label>
            </div>

            <div className="form-control">
                <label className="label cursor-pointer gap-4">
                    <span className="label-text">Aqua</span>
                    <input type="radio" name="theme-radios" className="radio theme-controller" value="aqua" onChange={handleThemeChange} checked={theme === 'aqua'}/>
                </label>
            </div>

        </div>
        </>
    )
}