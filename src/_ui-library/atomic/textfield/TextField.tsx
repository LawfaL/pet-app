import { memo } from "react";
import { Search } from "_assets/icon/search";
import { Profile } from "_assets/icon/profile";
import { ITextField } from "./TextField.type";
import styles from "./TextField.module.css";
import classNames from "classnames";

const TextFieldMemo: React.FC<ITextField> = ({ icon, placeholder, type }) => {
  return (
    <div
      className={classNames([
        styles["monito-textfield-container"],
        "bg-light",
      ])}
    >
      <Search />
      <input placeholder={placeholder} />
    </div>
  );
};

export const TextField = memo(TextFieldMemo);
