import Footer from "components/organisms/Footer";
import Header from "components/organisms/Header";
import useWindowSize from "hooks/useWindowSize";
import React, { ComponentPropsWithoutRef, FC, useMemo } from "react";
import styles from "./style.module.scss";

const Layout: FC = ({ children }) => {
  const { windowHeight } = useWindowSize();
  const style = useMemo<ComponentPropsWithoutRef<"div">["style"]>(
    () => ({ minHeight: windowHeight }),
    [windowHeight]
  );

  return (
    <div className={styles.wrapper} style={style}>
      <Header />
      <div className={styles.contentWrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
