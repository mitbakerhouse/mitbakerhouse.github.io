'use client'
import styles from "./customcarousel.module.css"
import Image from "next/image"
import { useState } from 'react';
import { ReactNode } from "react";

export interface CarouselSlide {
    image : string;
    caption?: ReactNode;
    alt : string;
};

const CustomCarousel = ({ carouselData }: { carouselData: CarouselSlide[] }) => {
    const [index, setIndex] = useState(0);

    if (!carouselData || carouselData.length === 0) {
        return <p>No carousel data available</p>;
    }

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    };

    const handleIndicatorClick = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    const content = carouselData.map((slide, slideIndex) => (
        <div
            key={slideIndex}
            className={styles.carouselItem}
            hidden={slideIndex !== index}
        >
            <div className={styles.carouselViewport}>
                <Image 
                    src={slide.image} 
                    alt={slide.alt}
                    fill
                    style={{ objectFit: 'contain' }}
                    priority={slideIndex === 0}
                />
            </div>
            {slide.caption && (
                <div className={styles.caption}>
                    {slide.caption}
                </div>
            )}
        </div>
    ));

    const indicatorContents = carouselData.map((_, slideIndex) => (
        <li key={slideIndex}>
            <button
                type="button"
                className={`${styles.indicator} ${slideIndex === index ? styles.indicatorActive : ''}`}
                onClick={() => handleIndicatorClick(slideIndex)}
                aria-label={`Go to slide ${slideIndex + 1}`}
                aria-current={slideIndex === index ? 'true' : undefined}
            />
        </li>
    ));

    return (
        <div className={styles.customcarousel}>
            <div className={styles.carousel}>
                <ol className={styles.carouselIndicators}>
                    {indicatorContents}
                </ol>
                <div className={styles.carouselInner}>
                    {content}
                </div>
                <button 
                    className={styles.controlPrev}
                    type="button" 
                    onClick={handlePrev}
                    aria-label="Previous slide"
                >
                    <span className={`${styles.controlIcon} ${styles.controlIconPrev}`} aria-hidden="true" />
                </button>
                <button 
                    className={styles.controlNext}
                    type="button" 
                    onClick={handleNext}
                    aria-label="Next slide"
                >
                    <span className={`${styles.controlIcon} ${styles.controlIconNext}`} aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}

export default CustomCarousel;
