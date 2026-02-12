import type { Metadata } from "next";
import { Fira_Sans, Fira_Mono } from "next/font/google";
import SideNav from "./components/res_sidenav";
import styles from './layout.module.css';
import Spacer from "../components/spacer";


export default function ResidentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.layout} style={{backgroundImage: 'url("/images/bakerhouse_photos/_DSC4920.jpg")'}}>
        <div>
          <Spacer />
          <SideNav />
        </div>
        {children}
    </main>


    // <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    //   <div className="w-full flex-none md:w-64">
    //     <SideNav />
    //   </div>
    //   <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    // </div>
  );
}
