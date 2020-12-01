import React, {
  ComponentPropsWithoutRef,
  FC,
  useCallback,
  useMemo,
  useState,
} from "react";
import AriaModal, { AriaModalProps } from "react-aria-modal";
import styles from "./style.module.scss";

const ReactAriaModal: FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const handleClick = useCallback<
    NonNullable<ComponentPropsWithoutRef<"button">["onClick"]> &
      AriaModalProps["onExit"]
  >(() => {
    setModalActive((prevModalActive) => !prevModalActive);
  }, []);
  const dialogStyle = useMemo<AriaModalProps["underlayStyle"]>(
    () => ({
      alignItems: "center",
      display: "flex",
      height: "100%",
      justifyContent: "center",
    }),
    []
  );

  return (
    <div>
      <button onClick={handleClick}>Click!</button>
      {modalActive ? (
        <AriaModal
          initialFocus="#reactAriaModal"
          onExit={handleClick}
          titleText="Hello World!"
          underlayStyle={dialogStyle}
        >
          <button
            className={styles.button}
            id="reactAriaModal"
            onClick={handleClick}
          >
            Click!
          </button>
        </AriaModal>
      ) : null}
    </div>
  );
};

export default ReactAriaModal;
