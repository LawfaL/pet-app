import { memo } from "react";
import styles from "./Homepage.module.css";
import Woman from "_assets/image/cover/12bf9db02e233aa64a34946d9a9aed4d.png";
import Hand from "_assets/image/cover/190409de921d3586c62ceebc4d4890f1.png";
import { Footer, InfoSection, PetSection, ProductSection, SellerSection } from "./_partials";
import { Advertisement } from "_ui-library/molecule/advertisement/Advertisement";

const HomepageMemo = () => {
  return (
    <div className={styles["monito-homepage"]}>
      <PetSection />
      <Advertisement
        imgUrl={Woman}
        title={"One more friend"}
        subTitle={"Thousands more fun!"}
        description={`Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!`}
      />
      {window.innerWidth > 600 && (
        <>
          <ProductSection />
          <SellerSection />
          <Advertisement
            flip
            showIcon
            imgUrl={Hand}
            title={"Adoption"}
            subTitle="We need help. so do they."
            description="Adopt a pet and give it a home,  it will be love you back unconditionally."
          />
        </>
      )}
      <InfoSection />
      <Footer />
    </div>
  );
};

export const Homepage = memo(HomepageMemo);
