import styles from './page.module.css';
import Spacer from '../../components/spacer';
import ContentTile from '../../components/content_tile';
import Image from 'next/image';
import CustomCarousel from '@/app/components/customcarousel';
import eventslides from './eventslides.json';


export default function Page() {
    return (
    <main className={styles.page} >
      <Spacer />
      <ContentTile heading="Past Events" content="Scroll through some of our past Baker Events and keep a look out in your email for updates!"/>
      <CustomCarousel carouselData={eventslides}/>
      <Spacer />
    </main>
    );
}