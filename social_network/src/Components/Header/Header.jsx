import classes from "./Header.module.css"

const Header = () => {
    return (
    <div className={classes.header}>
        <div>
            <a href="/"><img  width ="40" src="http://toplogos.ru/images/logo-warner-bros.png" alt=""/></a>
        </div>
    </div>
    )
}

export default Header;