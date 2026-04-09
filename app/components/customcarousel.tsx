'use client'
import styles from "./customcarousel.module.css"
import Image from "next/image"
import { useState } from 'react';
import { ReactNode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export interface CarouselSlide {
    image : string;
    caption?: ReactNode;
    alt : string;
};

/**
// <div className="bd-example">
//   <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    // <ol className="carousel-indicators">
    //   <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    //   <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    //   <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    // </ol>
    // <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="..." className="d-block w-100" alt="...">
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="...">
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="...">
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    // </div>
//     <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
//       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span className="sr-only">Previous</span>
//     </a>
//     <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
//       <span className="carousel-control-next-icon" aria-hidden="true"></span>
//       <span className="sr-only">Next</span>
//     </a>
//   </div>
// </div>
 */

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
            className={`carousel-item ${slideIndex === index ? 'active' : ''}`}
            style={{ display: slideIndex === index ? 'block' : 'none' }}
        >
            <div className={styles.carouselViewport}>
                <Image 
                    src={slide.image} 
                    alt={slide.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={slideIndex === 0}
                />
            </div>
            {slide.caption && (
                <div className="carousel-caption d-none d-md-block" style={{ background: 'rgba(0, 0, 0, 0.653)'}}>
                    {slide.caption}
                </div>
            )}
        </div>
    ));

    const indicatorContents = carouselData.map((_, slideIndex) => (
        <li
            key={slideIndex}
            className={slideIndex === index ? 'active' : ''}
            onClick={() => handleIndicatorClick(slideIndex)}
            style={{ cursor: 'pointer' }}
        />
    ));


    return (
        <div className={styles.customcarousel}>
            <div style={{ width: "30%" }}></div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {indicatorContents}
                </div>
                <div className="carousel-inner">
                    {content}
                </div>
                <button 
                    className="carousel-control-prev" 
                    type="button" 
                    onClick={handlePrev}
                    aria-label="Previous slide"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button 
                    className="carousel-control-next" 
                    type="button" 
                    onClick={handleNext}
                    aria-label="Next slide"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <div style={{ width: "30%" }}></div>
        </div>
    );
}

export default CustomCarousel;

