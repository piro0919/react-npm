import React, {
  ComponentPropsWithoutRef,
  FC,
  useCallback,
  useState,
} from "react";
import LinesEllipsis from "react-lines-ellipsis";
import styles from "./style.module.scss";

const ReactLinesEllipsis: FC = () => {
  const [text, setText] = useState(
    "祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。"
  );
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
