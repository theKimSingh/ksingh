import React from "react";
import Button from "./selector";
import { MdOutlineMail } from "react-icons/md";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";


const Socials = ({ className }) => {
  const array = [{Icon: FaGithub, link: "https://github.com/theKimSingh", index: 2}, {Icon: LiaLinkedin, link: "https://linkedin.com/in/singhkim", index: 3}, {Icon: MdOutlineMail, link: "mailto:kim-singh@outlook.com", index: 1},]
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {array.map(props => {
        const {Icon, link, index} = props

        return (
        <Icon key={index} size={50} className="m-5" onClick={() => window.open(link)}/>
      )})}
    </div>
  );
};

export default Socials;
