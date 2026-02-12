import styles from './page.module.css'
import Spacer from '../components/spacer'
import ContentTile from '../components/content_tile';

export default function Page() {
    return (
    <main>
      <div className={styles.page} style={{backgroundImage: 'url("/images/bakerhouse_photos/_DSC4988.jpg")'}}>
      <Spacer />
      <ContentTile content={<p>Please contact our Heads of House to schedule a tour.<br></br><a href="mailto:baker-tours@mit.edu">Email Heads of House</a></p>}/>
      </div>
      <Spacer h={200}/>
    </main>
    );
}