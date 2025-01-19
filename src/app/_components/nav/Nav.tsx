"use client";

import { useState } from "react";
import style from "./Nav.module.scss";
import { useScrollPosition } from "@/app/_hooks/useScrollPosition";
import useIsMobile from "@/app/_hooks/useIsMobile";
import Link from "next/link";

const menu = ["About Me", "Skills", "Archiving", "Projects"];

export default function Nav() {
  const { currentY, previousY } = useScrollPosition();
  const isMobile = useIsMobile();
  const [showMenu, setShowMenu] = useState(false);

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
                <Link href={"#AboutMe"}>{v}</Link>
              </li>
            ))}
          </ul>
          {isMobile ? (
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
