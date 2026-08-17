import bgStyles from '../styles/background_page.module.css'
import ContentTile from '../components/content_tile';

export default function Page() {
    return (
    <main>
      <div className={bgStyles.page} style={{backgroundImage: 'url("/images/bakerhouse_photos/_DSC4988.jpg")'}}>
      <ContentTile content={<p>Please contact <a href="mailto:baker-tours@mit.edu">baker-tours@mit.edu</a> to schedule a tour.</p>}/>
      </div>
    </main>
    );
}