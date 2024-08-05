import { useRef } from "react";
import Header from "../components/header";
import Socials from "../components/social";
import WorkCard from "../components/work";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/footer";
import Head from "next/head";
import Button from "../components/selector";
import Link from "next/link";


// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const portfolio = [
    {
      "id": "2",
      "title": "Poke Bay Website",
      "description": "React, Typescript",
      "imageSrc": "images/poke-bay.png",
      "url": "https://pokebayseattle.com"
  },
    {
        "id": "1",
        "title": "Edushare Website",
        "description": "React, Nodejs, Azure SQL",
        "imageSrc": "images/edushare.png", 
        "url": "https://meek-klepon-a4eeb9.netlify.app/"
    },
    
    {
      "id": "4",
      "title": "Vonette Schools",
      "description": "Flutter, Firebase, React",
      "imageSrc": "images/vonette.png",
      "url": "#"
   }, 
    {
        "id": "3",
        "title": "Punjabi School Website",
        "description": "Wordpress, Photoshop, Illustrator",
        "imageSrc": "images/psb.png",
        "url": "https://punjabischoolbothell.com"
    }
];

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:flex laptop:justify-evenly items-center">
        <div className="laptop:mt-20 mt-10 w-3/5">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-5xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
           
          </div>
          <div className="mt-5">
            <h1
              ref={textTwo}
              className="text-4xl tablet:text-5xl laptop:text-6xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
           
          </div><div className="my-5">
            <h1
              ref={textThree}
              className="text-4xl shrink-0 tablet:text-5xl laptop:text-6xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
           
          </div>
          <Button type="primary" className="" onClick={handleAboutScroll}><p className="p-2 text-2xl">Learn About Me  &#8594;</p></Button>
        </div>
        <div className="mt-5">
          <img src={("images/kimsingh.jpeg")}/>
        </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {portfolio.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 laptop:mt-40 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
