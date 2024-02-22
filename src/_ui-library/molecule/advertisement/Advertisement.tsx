import { memo, useMemo } from "react";
import styles from "./Advertisement.module.css";
import classNames from "classnames";
import { Paw } from "_assets/icon/paw";
import { Button } from "_ui-library/atomic";

const AdvertisementMemo = ({
  flip,
  imgUrl,
  title,
  subTitle,
  description,
  showIcon,
}: any) => {
  return (
    <div className={styles["monito-ads-container"]}>
      <div
        className={classNames([
          styles["monito-ads"],
          `${flip ? styles["monito-ads--flip"] : ""}`,
        ])}
      >
        <div
          className={classNames([
            styles["rect-ads"],
            styles["rect-ads-1"],
            "rect",
          ])}
        />
        <div
          className={classNames([
            styles["rect-ads"],
            styles["rect-ads-2"],
            `${flip && styles["rect-ads-2--flip"]}`,
            "rect",
          ])}
        />
        <div className={styles["monito-ads-content"]}>
          <img alt="image" className={flip && styles["monito-img--flip"]} src={imgUrl} />
          <div
            className={classNames([
              styles["monito-ads-text"],
              `${flip ? styles["monito-ads-text--flip"] : ""}`,
            ])}
          >
            <h1
              className={`font-heavy text-xxl text-primary ${
                flip ? "text-left" : "text-end"
              }`}
            >
              {title} {showIcon && <Paw />}
            </h1>
            <h2
              className={`font-bold text-lg text-primary ${
                flip ? "text-left" : "text-end"
              }`}
            >
              {subTitle}
            </h2>
            <p
              className={`text-primary text-sm ${
                flip ? "text-left" : "text-end "
              }`}
            >
              {description}
            </p>
            <div className={classNames([styles["monito-ads-buttons"], `${flip && styles["monito-ads-buttons--flip"]}`])}>
              <Button type="outlined" label="View Intro" size="medium" />
              <Button type="fill" label="Explore Now" size="medium" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Advertisement = memo(AdvertisementMemo);
