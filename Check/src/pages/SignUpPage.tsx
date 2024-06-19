import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";

const SignUpPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className={styles.signUpPage}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <div className={styles.loginSections}>
        <div className={styles.formWrapper}>
          <div className={styles.form}>
            <div className={styles.formText}>
              <b className={styles.createAccount}>Create Account</b>
            </div>
            <div className={styles.formParent}>
              <form className={styles.form1}>
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
                  <div className={styles.email}>
                    <input
                      className={styles.emailAddress}
                      placeholder="Confirm password"
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
                  <div className={styles.button}>Sign up</div>
                </button>
              </form>
              <div className={styles.frameChild} />
              <div className={styles.socialMediaLogin}>
                <div className={styles.orSignUp}>Or sign up with</div>
                <div className={styles.socialLoginContainer}>
                  <button className={styles.socialLogin}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image16@2x.png"
                    />
                    <div className={styles.text}>Google</div>
                  </button>
                  <button className={styles.socialLogin}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image17@2x.png"
                    />
                    <div className={styles.text1}>Facebook</div>
                  </button>
                  <button className={styles.socialLogin}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image18@2x.png"
                    />
                    <div className={styles.text2}>Apple</div>
                  </button>
                </div>
              </div>
              <div
                className={styles.iAlreadyHaveContainer}
                onClick={onIAlreadyHaveClick}
              >
                <span>{`I already have an account. `}</span>
                <span className={styles.login}>Login</span>
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

export default SignUpPage;
