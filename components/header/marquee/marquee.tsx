import Marquee from "react-double-marquee";
import s from "./marquee.module.scss";

export const RunLine = () => {
  const runlineItems = [
    "Драйв",
    "Юмор",
    "Креатив",
    "Эмоции",
    "Шоу",
    "Стиль",
    "Деликатность",
    "Вау-эффект",
    "Профессионализм",
    "Интерактив",
    "Драйв",
    "Юмор",
    "Креатив",
    "Эмоции",
    "Шоу",
    "Стиль",
    "Деликатность",
    "Вау-эффект",
    "Профессионализм",
    "Интерактив",
    "Драйв",
    "Юмор",
    "Креатив",
    "Эмоции",
    "Шоу",
    "Стиль",
    "Деликатность",
    "Вау-эффект",
    "Профессионализм",
    "Интерактив",
  ];
  return (
    <div className={s.runline}>
      <Marquee className={s.runline_text}>
        {runlineItems.map((el, i) => (
          <span key={i} className={s.runline_item}>
            {el}{" "}
          </span>
        ))}
      </Marquee>
    </div>
  );
};
