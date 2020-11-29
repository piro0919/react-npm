import Heading2 from "components/atoms/Heading2";
import React, { FC } from "react";
import styles from "./style.module.scss";

const About: FC = () => (
  <article className={styles.wrapper}>
    <Heading2>About</Heading2>
    <p>
      本サイトは、
      <a href="https://kk-web.link" rel="noreferrer" target="_blank">
        筆者
      </a>
      が普段の業務及び趣味における Web サービス開発中に導入を行った npm
      パッケージより、有用性が高いと感じたものを羅列しています。
      <br />
      そのため、予告なくパッケージの追加及び削除が行われます。
    </p>
  </article>
);

export default About;
