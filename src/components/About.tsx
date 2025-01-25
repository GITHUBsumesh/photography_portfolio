import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import imagesLoaded from 'imagesloaded';

gsap.registerPlugin(ScrollTrigger);
import {profile} from '../data/data.json';
export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loader animation
    const loaderTl = gsap.timeline({ defaults: { ease: "sine.inOut" } });
    gsap.set(".grey-circle", { scale: 0, transformOrigin: "50% 100%" });
    gsap.set(".black-circle", { scale: 0, transformOrigin: "50% 100%" });

    loaderTl
      .to(".grey-circle", { repeat: -1, repeatDelay: 0.5, scale: 1 }, "one")
      .to(".black-circle", { repeat: -1, repeatDelay: 0.5, scale: 1 }, "two")
      .set(".grey-circle", { zIndex: "6", scale: 0, repeat: -1, repeatDelay: 1 }, "two+=0.5")
      .set(".black-circle", { zIndex: "6", scale: 0, repeat: -1, repeatDelay: 1 }, "two+=1")
      .set(".grey-circle", { zIndex: "5", repeat: -1, repeatDelay: 1 }, "two+=1");

    loaderTl.timeScale(0.5);

    // Mouse icon animation
    const iconTl = gsap.timeline({ repeat: -1, paused: true });
    iconTl
      .to("#scroll", { y: 20, autoAlpha: 0, duration: 0.7 }, "icon")
      .to("#outline", { y: 8, duration: 0.7 }, "icon")
      .to("#outline", { y: 0, duration: 0.7 }, "icon+=0.7");

    // Hero Parallax
    const tl = gsap.timeline({
      defaults: { ease: "none", transformOrigin: "50% 50%" },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.utils.toArray("img").forEach((layer) => {
      const depth = parseFloat((layer as HTMLElement).dataset.depth || '0');
      const movement = -((layer as HTMLElement).offsetHeight * depth);
      tl.to(layer as HTMLElement, { y: -movement }, 0);
    });

    tl.to(".hero-title", { y: (i, el) => -el.offsetHeight * el.dataset.depth, autoAlpha: 0, scale: 1.08, duration: 0.2 }, 0)
      .to(".hero-sub", { y: (i, el) => -el.offsetHeight * el.dataset.depth, autoAlpha: 0, scale: 1.05, duration: 0.2 }, 0.06)
      .to("nav", { y: "-100%", duration: 0.16 }, 0)
      .to("#mouse-icon", { y: (i, el) => -el.offsetHeight * el.dataset.depth, autoAlpha: 0, duration: 0.2 }, 0);

    // Panel animation
    const tl2 = gsap.timeline({ paused: true, defaults: { ease: "power1.out" } });
    tl2
      .from(".panel-image", { autoAlpha: 0, scale: 0, y: 20, duration: 0.5 }, 0)
      .from(".panel-text", { autoAlpha: 0, x: 50, duration: 0.4 }, 0.04)
      .from(".btn", { autoAlpha: 0, x: 50, duration: 0.36 }, 0.08);

    ScrollTrigger.create({
      trigger: ".panel",
      start: "-25% top",
      end: "300px bottom",
      onEnter: () => {
        tl2.play();
        iconTl.pause();
      },
      onEnterBack: () => {
        tl2.reverse();
        iconTl.restart();
      }
    });

    // Handle image loading
    const imgToLoad = document.querySelectorAll("img");
    const loadImgs = imagesLoaded(imgToLoad);

    loadImgs.on("done", () => {
      gsap.to(".loader-circles div", {
        opacity: 0,
        onComplete: () => {
          loaderTl.pause();
          setIsLoading(false);
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      loaderTl.kill();
      iconTl.kill();
      tl.kill();
      tl2.kill();
    };
  }, []);

  return (
    <section id="about" className="min-h-screen ">
      {/* Loader */}
      <div className={`loader fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex items-center justify-center ${!isLoading ? 'hidden' : ''}`}>
        <div className="loader-circles h-24 w-24 relative flex items-center justify-center">
          <div className="grey-circle grey absolute w-10 h-10 rounded-full bg-gray-300" />
          <div className="black-circle black absolute w-10 h-10 rounded-full bg-gray-800" />
        </div>
      </div>

      {/* Navigation */}
      {/* <nav className="fixed top-0 left-0 w-[calc(100%-100px)] z-30 flex items-center justify-between px-12 py-4">
        <p className="font-bold text-white">ScrollTrigger Demo</p>
        <ul className="flex">
          {['Home', 'Explore', 'Contact'].map((item) => (
            <li key={item} className="mx-4">
              <a href="#" className="nav-link text-white relative font-bold hover:before:absolute hover:before:bottom-[-4px] hover:before:left-0 hover:before:w-full hover:before:h-0.5 hover:before:bg-white before:transition-all before:duration-300 before:ease-in-out">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav> */}

      {/* Hero Section */}
      <div className="hero relative h-screen w-full overflow-hidden">
        <Image 
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/590856/person.png" 
          alt="Person"
          className="person absolute top-0 left-0 bottom-1 w-full max-w-screen z-10"
          data-depth="0.10"
          layout="fill"
          objectFit="cover"
        />
        <Image 
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/590856/background.png" 
          alt="Background"
          className="bg relative w-full max-w-screen z-0"
          data-depth="0.34"
          layout="fill"
          objectFit="cover"
        />
        <Image 
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/590856/snow.png" 
          alt="Snow"
          className="snow absolute top-0 left-0 w-full max-w-screen z-20"
          data-depth="0.24"
          layout="fill"
          objectFit="cover"
        />
        
        <div className="hero-text absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col z-20">
          <h1 className="hero-title text-white text-6xl md:text-[6.25rem] font-bold mb-4" data-depth="0.64">
            DISCOVER NATURE
          </h1>
          <h3 className="hero-sub text-white text-2xl mt-4" data-depth="0.6">
            Take it all in
          </h3>
        </div>

        <svg 
          id="mouse-icon" 
          className="absolute bottom-[20%] left-1/2 -translate-x-1/2 z-30 w-10 md:w-[40px]" 
          viewBox="0 0 40 75"
          data-depth="0.5"
        >
          <path 
            id="outline" 
            fill="none" 
            stroke="#FFFFFF" 
            strokeWidth="3" 
            d="M20.434 61.208h0c-9.665 0-17.5-7.835-17.5-17.5v-25c0-9.665 7.835-17.5 17.5-17.5h0c9.665 0 17.5 7.835 17.5 17.5v25c0 9.665-7.835 17.5-17.5 17.5z" 
          />
          <circle id="scroll" fill="#FFFFFF" cx="20.434" cy="14.626" r="4" />
        </svg>
      </div>

      {/* Main Content */}
      <main className="panel h-screen flex items-center">
        <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-x-25 px-8">
          <div className="panel-image col-span-1 mr-3">
            <Image 
              src={profile.profile_pic}
              alt={profile.name}
              className="rounded-md object-cover mr-4"
              width={512}
              height={512}
            />
          </div>
          <div className="col-span-1 md:col-span-2 mt-8 md:mt-0">
            <p className="panel-text text-white text-lg md:text-xl mb-6">
              {profile.about_me}
            </p>
            {/* <button className="btn bg-gray-800 text-white px-4 py-3 rounded-none overflow-hidden relative hover:bg-gray-700 transition-colors">
              Read more
            </button> */}
          </div>
        </div>
      </main>
    </section>
  );
}