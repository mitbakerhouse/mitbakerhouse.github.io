// import Image from "next/image";
// import { url } from 'inspector';
import styles from './page.module.css'
// import background from "/images/bakerhouse_photos/_DSC5738.jpg";
import Spacer from './components/spacer'
import ContentTile from './components/content_tile';


export default function Home() {
  return (
    <main>
      <div className={styles.page} style={{backgroundImage: 'url("/images/bakerhouse_photos/_DSC5738.jpg")'}}>
      <Spacer />
          <ContentTile heading="Why Baker?" content={<p>Baker House is consistently ranked as #1 at MIT due to its strong sense of community, the stunning views of the Charles River, and its world-renowned architecture.</p>}/>
      <Spacer h={200} />
      </div>
    </main>
  );
}
