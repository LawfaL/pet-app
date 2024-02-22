import { memo } from "react";
import Logo from "../../_assets/image/logo.png";
import styles from "./Header.module.css";
import { Button, TextField } from "../../_ui-library";
import classNames from "classnames";
import { Profile } from "_assets/icon/profile";

const HeaderMemo = () => {
  return (
    <div className={styles["monito-header-container"]}>
      <div className={styles["monito-header-leftside"]}>
        <img alt="image" src={Logo} />
        <div
          className={classNames([
            styles["monito-header-nav"],
            "text-xs",
            "font-bold",
            "text-primary",
          ])}
        >
          <a href="/">Home</a>
          <a href="/">Category</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
      </div>
      <div className={styles["monito-header-rightside"]}>
        <TextField
          placeholder={"Search something here!"}
          icon={false}
          type={"flat"}
        />
        <Button
          label={"Join the community"}
          type={"fill"}
          size={"medium"}
        />
        <div className={styles["monito-header-profile"]}>
          <div className={styles["monito-header-profile-identity"]}>
            <Profile />
            <span className="font-semibold text-primary">VND</span>
          </div>
          <span className="chevron bottom"></span>
        </div>
      </div>
    </div>
  );
};

export const Header = memo(HeaderMemo);
