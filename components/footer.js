import React from "react";
import Socials from "./social";
import Link from "next/link";
import Button from "./selector";

const Footer = ({}) => {
  return <>
    <div className="laptop:mt-35 p-7 laptop:p-5">
      <div>
        <h1 className="text-2xl text-bold">Connect</h1>
        <div className="">
          <div>
            <Socials />
          </div>
        </div>
      </div>
    </div>
    <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
    © Copyright 2024 Kim Singh | Theme forked from <Link
        href="https://github.com/topics/react-portfolio-template"
        className="underline underline-offset-1">
        react-portfolio-template
      </Link> | Hosted by GitHub Pages | Photos from Unsplash
      
    </h1>
  </>;
};

export default Footer;
