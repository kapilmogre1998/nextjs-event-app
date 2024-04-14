import Link from "next/link"
import styleClasses from "./Header.module.css";

const Header = () => {

    return (
        <header className={styleClasses.header} >
            <div className={styleClasses.logo} >
                <Link href='/'>NextEvents</Link>
            </div>
            <nav className={styleClasses.navigation} >
                <ul>
                    <li>
                        <Link href='/events' >Browser All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;