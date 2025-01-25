"use client"
import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import FAQs from "@/components/FAQs";
import HeroSection from "@/components/HeroSection/HeroSection";
import Top_Picks from "@/components/Top_Picks/Top_Picks";
import { useEffect } from "react";

export default function Home() {
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  return (
    <main className="" style={{ 
      backgroundImage: `url("/Images/Photography_website_bg.png")`, 
      backgroundSize: 'cover' 
    }}>

      <HeroSection/>
      <About />
      <Blogs />
      <Top_Picks />
      <FAQs />
      <Contact />
    </main>
  );
}
