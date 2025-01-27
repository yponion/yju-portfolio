"use client";

import { useState } from "react";
import type { Skill } from "../Skills";
import style from "./Skill.module.scss";

interface Props {
  skill: Skill;
}

export default function Skill({ skill }: Props) {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <div
      key={skill.name}
      onClick={onClick}
      className={`${style.skill} ${active ? style.active : ""}`}
      style={{
        backgroundColor: skill.color.bg,
        boxShadow: skill.color.bg === "black" ? "0 0 0 0.5px white" : "",
      }}
    >
      {skill.svg ? (
        <div className={style.svg} style={{ fill: skill.color.fg }}>
          {skill.svg}
        </div>
      ) : null}
      <div className={style.name} style={{ color: skill.color.fg }}>
        {skill.name}
      </div>
    </div>
  );
}
