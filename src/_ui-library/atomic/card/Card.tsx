import { memo } from "react";
import styles from "./Card.module.css";
import { ICard } from "./Card.type";
import { Badge } from "../badge/Badge";
import { Gift } from "_assets/icon/gift";

const CardMemo: React.FC<ICard> = ({
  title,
  description,
  imgUrl,
  price,
  type,
  badges,
  promo,
}: any) => {
  const CardProduct = () => {
    return (
      <div className={styles["monito-card"]}>
        <img src={imgUrl} />
        <div className={styles["monito-card-description"]}>
          <p className="font-bold text-sm">{title}</p>
          <div>{description}</div>
          <p className="font-bold">{price} VND</p>
          {promo && (
            <div className={styles["monito-card-promo"]}>
              <Gift /> &#x2022; 
              <span className="font-bold text-xs">{promo}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const CardInfo = () => {
    return (
      <div className={styles["monito-card"]}>
        <img src={imgUrl} />
        <div className={styles["minoto-card-badges"]}>
          {badges.map((s: string) => (
            <Badge label={s} />
          ))}
        </div>
        <div className={styles["monito-card-description"]}>
          <p className="font-bold text-sm">{title}</p>
          <div className={styles["monito-card-description-info"]}>
            {description}
          </div>
        </div>
      </div>
    );
  };

  return <>{type == "info-card" ? <CardInfo /> : <CardProduct />}</>;
};

export const Card = memo(CardMemo);
