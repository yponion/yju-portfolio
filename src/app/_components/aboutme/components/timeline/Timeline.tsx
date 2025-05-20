"use client";

import { useEffect, useRef, useState } from "react";
import style from "./Timeline.module.scss";

interface Props {
  data: { title: string; date?: string; content?: string };
  isEnd: boolean;
}

export default function Timeline({ data, isEnd }: Props) {
  const dotRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!window) return;
      const turningPoint = (window.innerHeight / 5) * 4; // 뷰포트의 4/5 지점

      if (!dotRef.current) return;
      const dotY = dotRef.current.getBoundingClientRect().y;
      setActive(dotY < turningPoint);

      if (!lineRef.current) return;
      const line = lineRef.current.getBoundingClientRect();
      const px = line.y - turningPoint;
      let percent = 0;
      if (px < 0) percent = Math.min(Math.abs(px) / line.height, 1) * 100;
      lineRef.current.style.background = `linear-gradient(var(--text-color) ${percent}%, var(--text-color-opacity-20p) ${percent}%)`;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={style.container}>
      <div className={`${style.inner} ${active ? style.active : ""}`}>
        <div className={style.lineContaier}>
          <div ref={dotRef} className={style.dot}></div>
          {isEnd ? null : <div ref={lineRef} className={style.line} />}
        </div>
        <div className={style.content}>
          <h3>{data.title}</h3>
          {data.date ? <small>{data.date}</small> : null}
          {data.content ? <p>{data.content}</p> : null}
        </div>
      </div>
    </div>
  );
}
