import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./SignInPage.module.css";

const SignInPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className={styles.signInPage}>
      <Header
        notifications="/notifications1@2x.png"
        avatar="/avatar1@2x.png"
        showLoginSection={false}
      />
      <div className={styles.loginSections}>
        <div className={styles.formWrapper}>
          <div className={styles.form}>
            <div className={styles.formText}>
              <b className={styles.signIn}>Sign in</b>
            </div>
            <div className={styles.formParent}>
              <form className={styles.form1}>
                <form className={styles.form2}>
                  <div className={styles.formFields}>
                    <div className={styles.email}>
                      <input
                        className={styles.emailAddress}
                        placeholder="Email address"
                        type="text"
                      />
                      <img
                        className={styles.iconaccount}
                        alt=""
                        src="/iconaccount.svg"
                      />
                    </div>
                    <div className={styles.email}>
                      <input
                        className={styles.emailAddress}
                        placeholder="Password"
                        type="password"
                      />
                      <img
                        className={styles.iconaccount}
                        alt=""
                        src="/iconpassword.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.searchFlightsButton}>
                    <div className={styles.button}>Sign in</div>
                  </button>
                </form>
              </form>
              <div className={styles.frameChild} />
              <div className={styles.socialMediaLogin}>
                <div className={styles.orSignIn}>Or sign in with</div>
                <div className={styles.socialLoginContainer}>
                  <button className={styles.socialLogin}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image19@2x.png"
                    />
                    <div className={styles.text}>Google</div>
                  </button>
                  <button className={styles.socialLogin}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image20@2x.png"
                    />
                    <div className={styles.text1}>Facebook</div>
                  </button>
                  <button className={styles.socialLogin}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image21@2x.png"
                    />
                    <div className={styles.text2}>Apple</div>
                  </button>
                </div>
              </div>
              <div
                className={styles.dontHaveAnContainer}
                onClick={onDontHaveAnClick}
              >
                <span>{`Don’t have an account yet? `}</span>
                <span className={styles.signUp}>Sign up</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.band}>
        <div className={styles.bandInner}>
          <div className={styles.localhostIncAllRightsResParent}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.privacyPolicyParent}>
              <div className={styles.localhostIncAll}>Privacy Policy</div>
              <div
                className={styles.localhostIncAll}
              >{`Terms & Conditions`}</div>
              <div className={styles.localhostIncAll}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;