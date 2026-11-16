import React from "react";
import KurumiGreater from "../assets/images/KurumiGreeter.png";
import { SocialLinks } from "./SocialIcons";
const Introduction: React.FC = () => {
  return (
    <section>
      <img src={KurumiGreater} className="profile-picture header-content" />
      <SocialLinks />
      <div className="margin-top-15" />
        <h1> Welcome </h1>
        <span className="ShortBio">
          I'm Emilia (or Tarffie), a software developer. <br />
          I do mostly Game Development and whatever software I feel like during my free time. <br />
          I work currently at "Ordem Paranormal", a Brazilian RPG series live streamed.
        </span>
    </section>
  )
}

export default Introduction;
