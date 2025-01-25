"use client";
import React, { useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './style.module.css';
import {top_picks } from '../../data/data.json';


const Top_Picks = () => {
  const [selectedProject, setSelectedProject] = useState<number>(1);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: "bottom+=70px",
        })
    }, [])
  return (
    <section id="top-picks" className="">
     {/* <h1 className="text-3xl font-bold">Top Picks Section</h1> */}
      <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={top_picks[selectedProject-1]?.url}
                        alt={top_picks[selectedProject-1]?.name}
                        // width={500}
                        // height={1000}
                        fill={true}
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
                </div>
                <div className={styles.column}>
                    <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    top_picks.map( (pic) => {
                        return <div key={pic.id} onMouseOver={() => {setSelectedProject(pic.id)}} className={styles.projectEl}>
                            <h2>{pic.name}</h2>
                        </div>
                    })
                }
            </div>
        </div>
     </section>
  )
}

export default Top_Picks