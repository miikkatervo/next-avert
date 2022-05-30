import headerStyles from '../styles/Header.module.css'

function Header():JSX.Element {
    return(
        <div>
            <h1 className={headerStyles.title}>
                <span>Next</span> Avert
            </h1>
            <p className={headerStyles.description}>Osta unelmasi.</p>
        </div>
    )
}

export default Header