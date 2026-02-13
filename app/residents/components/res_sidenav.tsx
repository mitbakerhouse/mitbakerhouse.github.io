import Link from "next/link"
import styles from "./res_sidenav.module.css"

const SideNav = () => {
    return (
        <div className={styles.res_sidenav}>
            <h3>Quick Links</h3>
            <Link href="/residents">Residents Home</Link><br></br>
            <Link href="https://docs.google.com/document/d/e/2PACX-1vTYU9DSVl3NxHC82LnRDSAhYWOqHsAk3ZBiOtV9CZ3iyLQqaDw6BlYw_TBx_l9DagXrratMLVsKvxb1/pub" target="_blank">Welcome Packet<span>&#x2197;</span></Link><br></br>
            <Link href="https://drive.google.com/file/d/1gsOLs8SS90AMRrJusvCUG2uKTNQHRqd_/view" target="_blank">Rooming Policies<span>&#x2197;</span></Link><br></br>
            <Link href="https://docs.google.com/document/d/e/2PACX-1vSeF63qsFUldkdLWg8iM6NimiC2tTj9qX3zUpQm5nTLdL3GdQYF15rGDLtAiPDFwRXtSzsM7rrylnik/pub" target="_blank">Desk Policies<span>&#x2197;</span></Link><br></br>
            <Link href="/residents/events" target="_self">Events Page</Link><br></br>
            <Link href="/residents/reservations" target="_self">Reservations</Link>
        </div>

    );
}

export default SideNav;