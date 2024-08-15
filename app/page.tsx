'use client';
import { Poppins } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import Slides from "../components/Slides";
import Controls from "../components/Controls";
import SlideInfo from "../components/SlideInfo";
// import Slides from "@/components/Slides";
// import SlideInfo from "@/components/SlideInfo";
// import Controls from "@/components/Controls";


// ** google fonts
const inter = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

//** data structure */
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });


    //** return main tag */
  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        {/** Background image component */}

        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          {/** header component */}

          <Header />
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            {/** Slider left section content */}
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            
            {/** Slider Right carousel content */}
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "/1.png",
    location: "United States",
    description:
      "Tesla is accelerating the world's transition to sustainable energy with electric cars",
    title: "Tesla",
  },
  {
    img: "/2.png",
    title: "BMW",
    description:
      "Since 1933, almost every BMW front has featured a twin kidney grille. Though the design has changed over time – becoming smarter and more functional – it still acts as a distinctive brand ID",
    location: "Germany",
  },
  {
    img: "/3.png",
    title: "Audi",
    description:
      "This German luxury brand is known for technology and style as much as its performance, well-crafted interiors, and its trademark Quattro all-wheel-drive system. Nearly every model is a solid performer with a high-grade interior.",
    location: "Germany",
  },
  {
    img: "/4.png",
    title: "Porsche",
    description:
      "A timeless design, the unmistakable silhouette of the 911 is characterized by its iconic flyline. It has barely changed since 1963, and has shaped the DNA of all Porsche models.",
    location: "Germany",
  },
  {
    img: "/7.png",
    title: "Jaguar",
    description:
      "Our cars are a manifestation of our passion. Performance that cannot be measured, only felt. That’s why we call it art.",
    location: "United Kingdom",
  },
];


//** slider data */
const initData = sliderData[0];
