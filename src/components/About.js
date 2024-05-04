import React from "react";
import Links from "./Links"
import props from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    <Links>
    <h3>Links</h3>
    <a href="github">https://github.com/liza</a>
    <a href="linkedin">//www.linkedin.com/in/liza/</a>
    </Links>
    </div>
  );
}

export default About;
