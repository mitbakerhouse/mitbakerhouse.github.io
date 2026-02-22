import TopNav from "./topnav";
import Image from "next/image";
// import picture from "../../public/images/baker_logo_inverted_clear.svg"
import styles from './header.module.css'

const Header = () => {
    return (
        <main className={styles.header}>
            <div>
                <Image
                src="/images/baker_logo_inverted_clear.svg"
                alt="Baker House Logo"
                // width={200}
                // height={200}
                />
            <h1>Baker House, Baker Home</h1>
            </div>
            <TopNav />
        </main>
    );
}

export default Header;