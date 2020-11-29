import Heading1 from "components/atoms/Heading1";
import ToggleNodePackageManager from "components/molecules/ToggleNodePackageManager";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const Header: FC = () => (
  <header className={styles.header}>
    <Link to="/">
      <Heading1 />
    </Link>
    <ToggleNodePackageManager />
  </header>
);

export default Header;
