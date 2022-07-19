import React from "react";
import { Container } from "../../../../components/container/container";
import s from "./section_contacts.module.scss";
import Image from "next/image";

export const SectionContacts = () => {
  const contacts = [
    {
      image: "/images/vitia.png",
      name: "Виктор Иванов",
      description: "организация концертов, вокал",
      phone: "tel: +7 989 716 23 07",
    },
    {
      image: "/images/shu.png",
      name: "Александр Шубенков",
      description: "организация концертов, бас-гитара",
      phone: "tel: +7 950 851 06 06",
    },
    {
      image: "/images/torchik.png",
      name: "Денис Чуйков",
      description: "Технический директор, звукорежиссер",
      phone: "tel: +7 988 539 53 49",
    },
  ];
  return (
    <section className={s.section_contacts}>
      <h2 className={s.title}>НАШИ КОНТАКТЫ</h2>
      <Container>
        <div className={s.contact_blocks}>
          {contacts.map((item, i) => (
            <div className={s.contact_block} key={i}>
              <div className={s.image}>
                <Image src={item.image} width={150} height={150} />
              </div>
              <span className={s.name}>{item.name}</span>
              <span className={s.description}>{item.description}</span>
              <a className={s.phone} href={item.phone}>
                {item.phone}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
