"use client";

import { MouseEventHandler, useRef, useState } from "react";
import style from "./Card.module.scss";
import QRCode from "react-qr-code";

interface Props {
  title?: string;
  svg?: React.ReactNode;
  content: string;
}

export default function Card({ title, svg, content }: Props) {
  const [mouseXY, setMouseXY] = useState([0, 0]);
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter: MouseEventHandler = () => {
    setShow(true);
  };
  const handleMouseLeave: MouseEventHandler = () => {
    setShow(false);
    if (timer.current) {
      clearTimeout(timer.current);
      setCopied(false);
    }
  };
  const handleMouseMove: MouseEventHandler = (e) => {
    setMouseXY([e.nativeEvent.offsetX + 10, e.nativeEvent.offsetY - 120]);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setCopied(false);
        timer.current = null;
      }, 3000);
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleCopy}
      className={style.container}
    >
      {title && <div className={style.title}>{title}</div>}

      <div className={style.contentWrapper}>
        {!show ? (
          svg && <div className={style.svg}>{svg}</div>
        ) : (
          <div className={style.svg}>
            {copied ? (
              <svg
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            ) : (
              <svg
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
              </svg>
            )}
          </div>
        )}
        {!show ? (
          <p>{content}</p>
        ) : copied ? (
          "클립보드에 복사됨"
        ) : (
          "클릭하여 복사"
        )}
      </div>
      {show && (
        <div
          style={{ left: mouseXY[0], top: mouseXY[1] }}
          className={style.followDiv}
        >
          <QRCode size={98} value={content} viewBox={`0 0 98 98`} />
        </div>
      )}
    </div>
  );
}
