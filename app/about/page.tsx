import bgStyles from '../styles/background_page.module.css'
import ContentTile from '../components/content_tile';

export default function Page() {
    return (
    <main>
      <div className={bgStyles.page} style={{backgroundImage: 'url("/images/bakerhouse_photos/_DSC5062.jpg")'}}>
      <ContentTile content={<p>The famous Finnish architect Alvar Aalto designed this beautiful dormitory building. He described the building design as a mix between a ski lodge and a ship. His creative design promotes communication and interaction among all residents on six floors by having open study areas and lounges, as well as a luminous dining hall overlooking the Charles River. What is more, because of the unique design of the building, many rooms have a unique view of the river. The ingenious wave-shaped building maximizes the number of rooms with a sunny southern exposure, orienting them at oblique angles to soften noise from Memorial Drive. Hanging staircases serve as the vertical access, providing an increasingly dramatic view of MIT as one ascends, and the dining pavilion with its moon garden lights affords wonderful views of the Charles River. Internationally recognized as a masterpiece of modernism, Baker was renovated in 1999 for its fiftieth anniversary.</p>}/>
      </div>
    </main>
    );
}