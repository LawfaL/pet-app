import { memo } from "react";
import styles from "./Footer.module.css";
import { Button } from "_ui-library";
import Logo from "_assets/image/logo.png";
import { Facebook } from "_assets/icon/fb";
import { Instagram } from "_assets/icon/instagram";
import { Twitter } from "_assets/icon/twitter";
import { Youtube } from "_assets/icon/youtube";

const FooterMemo = () => {
  return (
    <>
      <div className={styles["monito-footer"]}>
        <div className={styles["monito-footer-subscribe"]}>
          <p className="text-md font-bold text-secondary text-left">
            Register now so you don't miss our programs
          </p>
          <div className={styles["monito-footer-subscribe-box"]}>
            <input
              className={styles["monito-footer-subscribe-input"]}
              placeholder="Enter your email here"
            />
            <Button label="Subscribe Now" size="medium" type="fill" />
          </div>
        </div>

        <div className={styles["monito-footer-social"]}>
          <div className={styles["monito-footer-navigation"]}>
            <a href="/">Home</a>
            <a href="/">Category</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </div>
          <div className={styles["monito-footer-navigation"]}>
            <a href="/">
              <Facebook />
            </a>
            <a href="/">
              <Instagram />
            </a>
            <a href="/">
              <Twitter />
            </a>
            <a href="/">
              <Youtube />
            </a>
          </div>
        </div>
        <hr />
      </div>
      <div className={styles["monito-footer-end"]}>
        <p>© 2022 Monito. All rights reserved.</p>
        <img alt="image" src={Logo} />
        <div className={styles["monito-footer-terms"]}>
          <a href="/">Term of service</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </>
  );
};

export const Footer = memo(FooterMemo);
