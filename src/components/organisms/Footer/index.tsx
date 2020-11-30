import React, { FC } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const Footer: FC = () => (
  <footer className={styles.footer}>
    <p>© 2020 React npm</p>
    <nav className={styles.nav}>
      <Link to="/about">About</Link>
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
