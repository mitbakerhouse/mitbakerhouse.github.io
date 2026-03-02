'use client'
import Link from "next/link"
import styles from "./customcarousel.module.css"
import Image from "next/image"
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';
import { JSX } from "react";
import { ReactNode } from "react";
import { Fragment } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

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
    // Modified from react-bootstrap example carousel
    let content, indicatorContents;
    try{
        content =  carouselData.map((slide, index) => {
            if (slide.caption && index==0) {
                return (
                    <div className="carousel-item active">
                        <Image src={slide.image} className="d-block w-100" alt={slide.alt}/>
                        <div className="carousel-caption d-none d-md-block">
                            {slide.caption}
                        </div>
                    </div>);
            } else if (slide.caption) {
                return (
                    <div className="carousel-item">
                        <Image src={slide.image} className="d-block w-100" alt={slide.alt}/>
                        <div className="carousel-caption d-none d-md-block">
                            {slide.caption}
                        </div>
                    </div>);
            } else {
                return (
                    <div className="carousel-item">
                        <Image src={slide.image} className="d-block w-100" alt={slide.alt}/>
                        <div className="carousel-caption d-none d-md-block">
                            {slide.caption}
                        </div>
                    </div>);
                        } 
                    });
        indicatorContents = carouselData.map((slide, index) => {
            if (slide && index==0) {
                return (
                    <li data-target="#carouselExampleCaptions" data-slide-to={index} className="active"></li>);
            } else {
                return (
                    <li data-target="#carouselExampleCaptions" data-slide-to={index}></li>
                );
            }
        });
    } catch{
        content = <p>Unable to render houseteam information</p>
        console.log("error in houseteam forEach\n");

    }
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    }


  return (
    <div className={styles.customcarousel}>
        <div style={{width:"30%"}}>
        </div>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                { indicatorContents }
            </ol>
            <div className="carousel-inner">
                {content}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
        </div>
        <div style={{width:"30%"}}>

        </div>
    </div>
    );
}

export default CustomCarousel;


