
import Link from "next/link"
import styles from "./topnav.module.css"

const TopNav = () => {
    return (
        <div id="navigation" className={styles.topnav}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/houseteam">Houseteam</Link>
            <Link href="/facilities">Facilities</Link>
            <Link href="/tours">Tours</Link>
            <Link href="/residents">Residents</Link>
        </div>

    );
}

export default TopNav;