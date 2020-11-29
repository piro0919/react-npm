import React, { FC, useEffect, useState } from "react";
import Switch, { ReactSwitchProps } from "react-switch";
import { FaNpm, FaYarn } from "react-icons/fa";
import styles from "./style.module.scss";
import {
  NodePackageManagerConsumer,
  NodePackageManagerValue,
} from "contexts/NodePackageManagerContext";

const ToggleNodePackageManager: FC<
  Pick<NodePackageManagerValue, "nodePackageManager"> & {
    handleChange: NodePackageManagerValue["toggleNodePackageManager"];
  }
> = ({ handleChange, nodePackageManager }) => {
  const [checked, setChecked] = useState<ReactSwitchProps["checked"]>(
    nodePackageManager === "npm"
  );

  useEffect(() => {
    setChecked(nodePackageManager === "npm");
  }, [nodePackageManager]);

  return (
    <Switch
      checked={checked}
      checkedIcon={
        <div className={styles.iconWrapper}>
          <FaNpm className={styles.icon} />
        </div>
      }
      handleDiameter={24}
      height={28}
      offColor="#2c8ebb"
      onChange={handleChange}
      onColor="#c53635"
      uncheckedIcon={
        <div className={styles.iconWrapper}>
          <FaYarn className={styles.icon} />
        </div>
      }
      width={56}
    />
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <NodePackageManagerConsumer>
    {({ nodePackageManager, toggleNodePackageManager }) => (
      <ToggleNodePackageManager
        handleChange={toggleNodePackageManager}
        nodePackageManager={nodePackageManager}
      />
    )}
  </NodePackageManagerConsumer>
);
