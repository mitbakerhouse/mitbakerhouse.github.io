import styles from './page.module.css';
import Spacer from '../components/spacer';
import ContentTile from '../components/content_tile';
import Image from 'next/image';

export default function Page() {
    return (
  <div className={styles.page} >
      <Spacer />
      <ContentTile heading='Guest List' content={<p>Each Resident may put up to 4 students on their guest list.<br></br><a href="https://docs.google.com/forms/d/e/1FAIpQLSdP_oDWznfEFyiRa5XrOgDmX1eir5q3v_cCZXh3O_EP4iuCSg/viewform"> Go to Guest List Form</a></p>}/>
      <ContentTile heading='Baker Exec' content={<p>Baker Exec is the dorm government of Baker House, Baker Home. We plan community events, provide communication between students and the houseteam, and represent Baker to the larger MIT community.</p>} />
      <div className={styles.imageWrap}>
      <Image
        src="/BakerExecPosterSP25_short.svg"
        alt="List of Baker Exec Members and their photographs."
        width={700}
        sizes="(max-width: 768px) 100vw, 700px"
        className={styles.posterImage}
        />
        </div>
        <Spacer h={20}/>
      <ContentTile heading='RPMs' content={<p>The function of the Residential Peer Mentor (RPM) is to strengthen the support network for first-year students within Baker House. Peer Mentors are community-builders and serve as support for first-year students, helping answer questions, connect them to resources, and introduce them to the unique aspects of both Baker House and MIT. Baker House RPMs collaborate on programs focused on health and wellness, academic success, and the transition to MIT and learning about the campus, its resources, and the opportunities around Cambridge and Boston to make sure that the first-year experience is smooth, seamless, and full of opportunities to learn.</p>}/>
        <div className={styles.imageWrap}>
      <Image 
        src="/images/houseteam/past_rpms.jpg"
        alt="RPM List"
        width={700}
        sizes="(max-width: 768px) 100vw, 700px"
        className={styles.posterImage}
        />
        </div>
      <Spacer />
      </div>
    );
}