import { memo } from "react";
import { Button } from "../../atomic";
import { ISection } from "./Sections.type";
import styles from "./Section.module.css";
import classNames from "classnames";

const SectionMemo: React.FC<ISection> = ({ description, btnLabel, items }) => {
  return (
    <>
      <div className={classNames(styles["monito-section"], "bg-light")}>
        <div className={styles["monito-section-header"]}>
          {description}
          <Button label={btnLabel} type={"outlined"} size="small" iconRight={<span className="chevron right"></span>}/>
        </div>
        <div className={styles["monito-section-items"]}>{items}</div>
      </div>
    </>
  );
};

export const Section = memo(SectionMemo);
