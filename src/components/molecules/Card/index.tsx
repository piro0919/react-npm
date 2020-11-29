import Heading2, { Heading2Props } from "components/atoms/Heading2";
import Heading3 from "components/atoms/Heading3";
import React, { ComponentPropsWithoutRef, FC } from "react";
import styles from "./style.module.scss";
import { AiFillGithub } from "react-icons/ai";

export type CardProps = {
  demo: ComponentPropsWithoutRef<"div">["children"];
  name: Heading2Props["children"];
  version: ComponentPropsWithoutRef<"div">["children"];
};

const Card: FC<CardProps> = ({ demo, name, version }) => (
  <div className={styles.wrapper}>
    <header className={styles.headerWrapper}>
      <div>
        <Heading2>{name}</Heading2>
      </div>
      <a
        href={`https://www.npmjs.com/package/${name}`}
        rel="noreferrer"
        target="_blank"
      >
        <AiFillGithub className={styles.icon} />
      </a>
    </header>
    <div className={styles.contentWrapper}>
      <article>
        <div className={styles.heading3Wrapper}>
          <Heading3>Version</Heading3>
        </div>
        <div className={styles.articleContentWrapper}>{version}</div>
      </article>
      <article>
        <div className={styles.heading3Wrapper}>
          <Heading3>Demo</Heading3>
        </div>
        <div className={styles.articleContentWrapper}>{demo}</div>
      </article>
    </div>
  </div>
);

export default Card;
