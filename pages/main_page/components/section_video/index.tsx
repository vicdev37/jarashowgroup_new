import React from "react";
import { Container } from "../../../../components/container/container";
import s from "./section_video.module.scss";

export const SectionVideo = () => {
  return (
    <section className={s.section_video}>
      <Container>
        <h2 className={s.video_title}>
          Видео, после которых вы в нас влюбитесь!
        </h2>
        <div className={s.video_wrapper}>
          <div className={s.video_item}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vNI89W7UFVA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={s.video_item}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ndzFs08h-7Q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={s.video_item}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EZxt30YdPDo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={s.video_item}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YcoAc2sI1uY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};
