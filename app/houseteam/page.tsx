import GraTile from "../components/gra_tile";
import houseteam from "../houseteam/houseteam.json";
import bgStyles from '../styles/background_page.module.css'


export default function Page() {
    let content;
    try {

        content = houseteam.map((val, index) => {
            return <GraTile key={index} name={val.name} bio={val.bio} floor={val.floor} image={val.image} />;
        });
    }
    catch {
        content =<p>Unable to render houseteam information</p>
        console.log("error in houseteam forEach\n");
    }
    return (
    <main>
      <div className={bgStyles.page} style={{backgroundImage: 'url("/images/bakerhouse_photos/_DSC4740.jpg")'}}>
      {content}
      </div>
    </main>
    );
}