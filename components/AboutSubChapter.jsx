"use client";

import { subChapters } from "@/lib/subChapters";
import Image from "next/image";
import SubChapterDesc from "./SubChapterDesc";
import { useEffect, useState } from "react";

const AboutSubChapter = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const clickNext = () => {
    activeImageIndex === subChapters.length - 1
      ? setActiveImageIndex(0)
      : setActiveImageIndex(activeImageIndex + 1);
  };

  const clickPrev = () => {
    activeImageIndex === 0
      ? setActiveImageIndex(subChapters.length - 1)
      : setActiveImageIndex(activeImageIndex - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <main className="w-full min-h-screen mx-auto grid place-items-center bg-slate-100 z-[-1]">
      <div className="grid place-items-center grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
        <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded-2xl">
          {subChapters.map((chap, idx) => (
            <div
              className={`${
                idx === activeImageIndex
                  ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                  : "hidden"
              }`}
              key={idx}
            >
              <Image
                src={chap.src}
                alt=""
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
              />
            </div>
          ))}
          <SubChapterDesc
            activeImageIndex={activeImageIndex}
            clickNext={clickNext}
            clickPrev={clickPrev}
          />
        </div>
      </div>{" "}
    </main>
  );
};

export default AboutSubChapter;
