// import TopNav from "./topnav";
import styles from "./content_tile.module.css"
import Image from "next/image"
// import { readFile } from "node:fs";

export interface ContentInfo {
    heading?: string;
    content: React.ReactNode;
    image?: string;
}

export default async function ContentTile ({heading, content, image} : ContentInfo) {
    // const lowerName = name.toLowerCase();
    // const bioResponse = await fetch("./" + lowerName + ".txt")
    // string bio;// = bioResponse.text() // Check here first -> replace with .json?
    return (
        <main className={styles.content_tile}>
            <h2>{heading}</h2>
            <div className={styles.content_body}>
            {image && (
                <div className={styles.image_wrap}>
                    <Image
                        alt={"Image"}
                        src={"/images/" + image}
                        fill
                        sizes="(max-width: 768px) 90vw, 720px"
                        className={styles.content_image}
                    />
                </div>
            )}
            <div className={styles.content_text}>{content}</div>
            </div>
        </main>
    );
}

// export default ContentTile;