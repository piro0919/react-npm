import React, { FC } from "react";
import styles from "./style.module.scss";

const Footer: FC = () => (
  <footer className={styles.footer}>
    <p>© 2020 React npm</p>
    <nav>
      <a
        href="https://github.com/piro0919/react-npm"
        rel="noreferrer"
        target="_blank"
      >
        GitHub
      </a>
    </nav>
  </footer>
);

export default Footer;
