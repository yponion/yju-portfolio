"use client";

import { useModalStore } from "@/store/modal";
import style from "./page.module.scss";
import { useEffect } from "react";

export default function Modal() {
  const { open, data, setOpen } = useModalStore();
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const closeModal = () => {
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div className={style.container} onClick={closeModal}>
      <div className={style.inner} onClick={(e) => e.stopPropagation()}>
        <div className={style.header}>
          <div className={style.title}>{data?.title}</div>
          <div className={style.close} onClick={closeModal}>
            X
          </div>
        </div>
        <div className={style.imgBox}></div>
        <div className={style.skills}>{data?.skills.join(" / ")}</div>
        <div className={style.date}>{data?.date}</div>
        <div className={style.headcount}>{data?.headcount + "인 프로젝트"}</div>
        <div className={style.introduce}>{data?.introduce}</div>
      </div>
    </div>
  );
}
