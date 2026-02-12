import styles from './page.module.css';
import Spacer from '../../components/spacer';
import ContentTile from '../../components/content_tile';
import Image from 'next/image';

export default function Page() {
    return (
    <main>
      <div className={styles.page} style={{backgroundImage: 'url("/images/bakerhouse_photos/_DSC4920.jpg")'}}>
      <Spacer />
      </div>
    </main>
    );
}