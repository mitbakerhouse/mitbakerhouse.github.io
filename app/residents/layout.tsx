import SideNav from "./components/res_sidenav";
import styles from './layout.module.css';


export default function ResidentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={styles.layout}
      style={{ backgroundImage: 'url("/images/bakerhouse_photos/_DSC4920.jpg")' }}
    >
        <div className={styles.layoutColumn}>
          <SideNav />
        </div>
        <div className={styles.layoutColumn}>
          {children}
        </div>
    </main>
  );
}
