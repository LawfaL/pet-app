import { memo } from "react";
import styles from "./Banner.module.css";
import Woman from "_assets/image/cover/8e1aa9a0522d0cebb4144a5ceda0344a.png";
import { Button } from "_ui-library";
import { Play } from "_assets/icon/play";

const BannerMemo = () => {
  return (
    <div className={styles["monito-banner"]}>
      <div className={styles["monito-banner-left"]}>
        <div className={styles["monito-banner-left-text"]}>
          <h1 className="font-heavy text-xxl text-primary">One More Friend</h1>
          <h2 className="font-bold text-xl text-primary">Thousand More Fun!</h2>
          <p className="font-semibold text-primary text-sm">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
        </div>
        <div className={styles["monito-banner-left-buttons"]}>
          <Button
            type="outlined"
            label="View Intro"
            size="medium"
            iconRight={<Play />}
          />
          <Button
            type="fill"
            label="Explore Now"
            size="medium"
          />
        </div>
      </div>
      <div className={styles["monito-banner-right"]}>
        <img alt="image" src={Woman} />
        <div className="rect rect-2" />
        <div className="rect rect-3" />
        <div className="rect rect-4" />
      </div>
    </div>
  );
};

export const Banner = memo(BannerMemo);
