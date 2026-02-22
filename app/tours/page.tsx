import styles from './page.module.css'
import Spacer from '../components/spacer'
import ContentTile from '../components/content_tile';

export default function Page() {
    return (
    <main>
      <div className={styles.page} style={{backgroundImage: 'url("/images/bakerhouse_photos/_DSC4988.jpg")'}}>
      <Spacer />
      <ContentTile content={<p>Please contact <a href="mailto:baker-tours@mit.edu">Email Heads of House</a> to schedule a tour.</p>}/>
      <Spacer h={200}/>
      </div>
    </main>
    );
}