import Link from "next/link"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return(
        <>
            <header>
                <Link href="/" className={styles.logo}>logo</Link>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link href="">home</Link>
                    </li>
                    <li>
                        <Link href="orders">orders</Link>
                    </li>
                    <li>
                        <Link href="addorders">add orders</Link>
                    </li>
                    <li>
                        <Link href="about">about</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;