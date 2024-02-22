import { memo } from "react";
import Brand1 from "_assets/image/product/058110bfc32e5bc6e602a644bb081932.png";
import Brand2 from "_assets/image/product/2a2af258ba0090ef77ead6e78aec992d.png";
import Brand3 from "_assets/image/product/58915815ebfb624ccd4b8f8bc9d06ecf.png";
import Brand4 from "_assets/image/product/70e851524fa4db43a4f7d590708a8d8b.png";
import Brand5 from "_assets/image/product/89025a0019d8f8d0409d4bc87affc11e.png";
import Brand6 from "_assets/image/product/b261ca3e4e94dccf723b6ed12db2575b.png";
import Brand7 from "_assets/image/product/e00bed606afe9e77f1cc9c7f2e95597b.png";
import styles from "./SellerSection.module.css";

const SellerSectionMemo = () => {
  const images = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7];
  return (
    <div className={styles["monito-seller-section"]}>
      <div className="text-left">
        <span className="text-primary text-sm">
        Proud to be part of
        </span>
        <span className="font-bold text-primary text-md"> Pet Sellers</span>
      </div>
      <div className={styles["monito-seller-section-imgcontent"]}>
        {images.map((p) => (
          <img src={p} />
        ))}
      </div>
    </div>
  );
};

export const SellerSection = memo(SellerSectionMemo);
