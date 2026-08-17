import styles from './page.module.css';
import ContentTile from '../../components/content_tile';
import Link from 'next/link';

export default function Page() {
    return (
    <main>
      <div className={styles.page}>
      <ContentTile 
        content= {
          <p>
            Looking to reserve a space in Baker? You MUST be a current Baker resident. Make sure the space is available at that time using the Google Calendar below, and follow this link to reserve:
            <br></br>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfIugOOJ-ti3KC-iTcqPIVCCo15NeEB4UVlExJKBUqG-KN6pg/viewform">Reservations Form Link</Link>
          </p>
        }
      />
      <div className={styles.calendarWrap}>
        <iframe
          className={styles.calendarFrame}
          src="https://calendar.google.com/calendar/embed?src=f760905c23bc78ef72e4acb394ed5c3e9716c3bfbcdfcdaf5a38e802105cf434%40group.calendar.google.com&ctz=America%2FLos_Angeles"
          title="Baker House reservation calendar"
        ></iframe>
      </div>
      </div>
    </main>
    );
}
