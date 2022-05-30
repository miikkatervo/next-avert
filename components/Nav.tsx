import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'


function Nav():JSX.Element {
    return(
        <nav className={navStyles.nav}>
            <ul>
                <Link href='/'>Home</Link>
            </ul>
            <ul>
                <Link href='/about'>About</Link>
            </ul>
        </nav>

    )
}

export default Nav