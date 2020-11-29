import React, {
  ComponentPropsWithoutRef,
  FC,
  useCallback,
  useState,
} from "react";
import LinesEllipsis from "react-lines-ellipsis";
import styles from "./style.module.scss";

const ReactLinesEllipsis: FC = () => {
  const [text, setText] = useState("react-lines-ellipsis");
  const handleChange = useCallback<
    NonNullable<ComponentPropsWithoutRef<"textarea">["onChange"]>
  >(({ currentTarget: { value } }) => {
    setText(value);
  }, []);

  return (
    <div className={styles.wrapper}>
      <LinesEllipsis
        basedOn="letters"
        ellipsis="..."
        maxLine="3"
        text={text}
        trimRight={true}
      />
      <textarea
        className={styles.textarea}
        onChange={handleChange}
        value={text}
      />
    </div>
  );
};

export default ReactLinesEllipsis;
