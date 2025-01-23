"use client";

import type { Project } from "@/app/_types/Project";
import style from "./Card.module.scss";
import Image from "next/image";
import { useModalStore } from "@/store/modal";
import { useScrollTrigger } from "@/app/_hooks/useScrollTrigger";

interface Props {
  project: Project;
}

export default function Card({ project }: Props) {
  const {active, ref}=useScrollTrigger({onece:true});
  const modalStore = useModalStore();
  const openModal = (data: Project) => {
    modalStore.setData(data);
    modalStore.setOpen(true);
  };

  return (
    <div
      ref={ref}
      className={`${style.card} ${active ? style.active : ""}`}
      onClick={() => openModal(project)}
    >
      <div className={style.viewBox}>
        {project.title === "yju-portfolio" ? (
          <iframe src={project.src} />
        ) : (
          <Image
            className={style.img}
            layout="fill"
            objectFit="cover"
            src={project.src}
            alt={project.title + "이미지"}
          />
        )}
      </div>
      <div className={style.text}>
        <h1 className={style.title}>{project.title}</h1>
        <p className={style.skills}>{project.skills.join(" / ")}</p>
        <p className={style.more}>{project.introduce}</p>
      </div>
    </div>
  );
}
