import bgStyles from '../styles/background_page.module.css'
import ContentTile from '../components/content_tile';


export default function Page() {
    return (
    <main>
      <div className={bgStyles.page} style={{backgroundImage: 'url("/images/bakerhouse_photos/_DSC5323.jpg")'}}>
      <ContentTile heading="House Manager" image="houseteam/jonnolan.jpg" content={<p>The House Operations Manager is responsible for providing a clean, safe, and secure living environment. Jon Nolan has over 21 years experience at MIT. Any maintenance requests, please go to <a href="https://atlas.mit.edu/">Atlas</a> or e-mail him at <a href="mailto:jnolan@mit.edu">jnolan@mit.edu</a>.</p>}/>
      </div>
    </main>
    );
}