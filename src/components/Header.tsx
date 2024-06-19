import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
  notifications?: string;
  avatar?: string;
  showLoginSection?: boolean;
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  notifications,
  avatar,
  showLoginSection,
}) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.headerContent}>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
        <div className={styles.navLinks}>
          <div className={styles.home}>Home</div>
          <div className={styles.home}>Stays</div>
          <div className={styles.home}>Become a host</div>
        </div>
        {showLoginSection && (
          <div className={styles.loginSection}>
            <img
              className={styles.notificationsIcon}
              alt=""
              src={notifications}
            />
            <img className={styles.avatarIcon} alt="" src={avatar} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
