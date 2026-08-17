import bgStyles from './styles/background_page.module.css'
import ContentTile from './components/content_tile';


export default function Home() {
  return (
    <main>
      <div className={bgStyles.page} style={{backgroundImage: 'url("/images/bakerhouse_photos/_DSC5738.jpg")'}}>
          <ContentTile heading="Why Baker?" content={<p>Baker House is consistently ranked as #1 at MIT due to its strong sense of community, the stunning views of the Charles River, and its world-renowned architecture.</p>}/>
      </div>
    </main>
  );
}
