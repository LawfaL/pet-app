import { memo } from "react";
import styles from "./Badge.module.css";

const BadgeMemo = ({ label }: any) => {
  return <div className={styles["monito-badge"]}>{label}</div>;
};

export const Badge = memo(BadgeMemo);
