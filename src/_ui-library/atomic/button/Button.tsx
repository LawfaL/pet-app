import { memo, useMemo } from "react";
import { IButton } from "./Button.type";
import styles from "./Button.module.css";
import classNames from "classnames";

const ButtonMemo: React.FC<IButton> = ({
  label,
  type,
  icon,
  iconRight,
  iconLeft,
}: any) => {

  const variant = useMemo(
    () => ({
      [`${styles["monito-button--outline"]}`]: type === "outlined",
      [`${styles["monito-button--fill"]}`]: type === "fill",
    }),
    [type]
  );

  const textColor = useMemo(
    () => {
      if (type == "fill") {
        return 'text-secondary'
      } else {
        return 'text-primary'
      }
    },
    [type]
  );

  return (
    <>
      {type == "icon" ? (
        <a className={styles["monito-button--icon"]}>{icon}</a>
      ) : (
        <button className={classNames([styles["monito-button"], variant, textColor])} type="button">
          {iconLeft}
          {label}
          {iconRight}
        </button>
      )}
    </>
  );
};

export const Button = memo(ButtonMemo);
