"use client";

import { useModalStore } from "@/store/modal";
import style from "./page.module.scss";
import { useEffect } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
          <h1 className={style.title}>{data?.title}</h1>
          <div className={style.close} onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
          </div>
        </div>
        <div className={style.imgBox}>
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {data?.images.map((v, i) => (
              <SwiperSlide key={i}>
                <div className={style.img}>
                  <Image fill src={v} alt={v} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={style.skills}>
          {data?.skills.map((v) => (
            <div key={v} className={style.skill}>
              {v}
            </div>
          ))}
        </div>
        <small className={style.date}>{data?.date}</small>
        <small className={style.headcount}>
          {data?.headcount + "인 프로젝트"}
        </small>
        <div className={style.introduce}>{data?.introduce}</div>
      </div>
    </div>
  );
}
