"use client";

import { useEffect, useState } from "react";
import style from "./nav.module.scss";
import { useScrollPosition } from "@/app/_hooks/useScrollPosition";

const menu = ["About Me", "Skills", "Archiving", "Projects"];

export default function Nav() {
  const { currentY, previousY } = useScrollPosition();
  const [windowWidth, setWindowWidth] = useState(1024);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (window) setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={`${style.container}
       ${currentY < previousY || currentY < 72 ? style.show : style.hide} ${
        currentY > 172 ? style.navBG : null
      }`}
    >
      <div className={style.navWraper}>
        <div className={style.logo}>YJU&apos;s Portfolio</div>
        <>
          <ul className={`${style.ul} ${showMenu ? style.show : style.hide}`}>
            {menu.map((v, i) => (
              <li key={i} className={style.li}>
                {v}
              </li>
            ))}
          </ul>
          {windowWidth <= 767 ? (
            <div className={style.menuBtn} onClick={onClickMenu}>
              <div className={style.lineBox}>
                {["top", "mid", "bot"].map((v, i) => (
                  <div
                    key={i}
                    className={`${style[v]} ${showMenu ? style.open : ""}`}
                  ></div>
                ))}
              </div>
            </div>
          ) : null}
        </>
      </div>
    </div>
  );
}
