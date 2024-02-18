import { subChapters } from "@/lib/subChapters";
import { Button } from "./ui/button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const SubChapterDesc = ({ clickNext, clickPrev, activeImageIndex }) => {
  return (
    <div className="grid place-items-start w-full bg-slate-100 relative rounded-tr-3xl rounded-br-3xl">
      <div className="uppercase px-0 absolute top-2 left-4 text-primary font-bold text-xl text-blue-800">
        IEEE subChapters
      </div>
      {subChapters.map((chap, idx) => (
        <div
          className={
            idx === activeImageIndex
              ? `block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out`
              : "hidden"
          }
          key={idx}
        >
          <div className="py-14 text-4xl font-semibold">
            <div className="flex items-center text-center">
              <span>{chap.title}</span>
            </div>
          </div>
          <div className="leading-relaxed font-medium text-base tracking-wide h-40 italic text-slate-700 text-center">
            {chap.desc}
          </div>
          <div className="absolute bottom-1 w-full flex justify-center items-center">
            <div className="absolute bottom-2 right-16 cursor-pointer">
              <Button onClick={clickPrev} variant="outline">
                <ArrowBigLeft />
              </Button>
            </div>
            <div className="absolute bottom-2 right-1 cursor-pointer">
              <Button onClick={clickNext} variant="outline">
                <ArrowBigRight />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubChapterDesc;
