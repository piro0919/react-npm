import React, { FC } from "react";
import Spinner from "react-spinkit";
import styles from "./style.module.scss";

const ReactSpinkit: FC = () => (
  <div className={styles.wrapper}>
    <Spinner name="pacman" />
  </div>
);

export default ReactSpinkit;
