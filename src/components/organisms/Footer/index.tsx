import React, { FC } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const Footer: FC = () => (
  <footer className={styles.footer}>
    <p>© 2020 React npm</p>
    <nav>
      <Link to="/about">About</Link>
    </nav>
  </footer>
);

export default Footer;
