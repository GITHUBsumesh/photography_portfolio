import React from "react";
import { heroImages } from "../data/data.json";
import Image from "next/image";
const Blogs = () => {
  return (
    <section
      id="blogs"
      className="h-[40rem]  flex flex-col items-center justify-center"
    >
      <h1 className="text-3xl font-bold font-nav text-nav leading-nav text-white">BLOGS</h1>
      <div className="flex flex-wrap justify-center">
      {heroImages.map((frame, index) => (
        <button key={index} className="w-[20rem] h-[20rem] m-5 relative">
          
          <Image
            src={frame.url}
            alt={frame.name}
            layout="fill"
                  objectFit="cover"
                  className="rounded-lg "
          />
        </button>
      ))}
      </div>
    </section>
  );
};

export default Blogs;
