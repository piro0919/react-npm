import Heading1 from "components/atoms/Heading1";
import React, { FC } from "react";
import styles from "./style.module.scss";

const Header: FC = () => (
  <header className={styles.header}>
    <Heading1 />
  </header>
);

export default Header;
