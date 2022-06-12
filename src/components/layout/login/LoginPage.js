import React, { useState } from "react";
import { BsEnvelope, BsShieldLock } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase.config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      return <Navigate to="./dashboard" />;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section__form">
      <div>
        <div className="header__form">
          <h2>Publisher Portal</h2>
          <div className="icon__header--container">
            <FaUsers className="form__icons--header" />
          </div>
          <p>Welcome to the Congregational Cart Scheduler</p>
          <p>Login here to schedule your cart assignments</p>
        </div>
        <div>
          <form method="post" action="#" onSubmit={handleLogin}>
            <fieldset>
              <div className="flex__form">
                <div className="form__field">
                  <BsEnvelope className="form__icons" />
                  <input
                    className="form__input"
                    id="email"
                    type="email"
                    name="email"
                    placeholder=" "
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form__field">
                  <BsShieldLock className="form__icons" />
                  <input
                    className="form__input"
                    id="password"
                    type="password"
                    name="password"
                    placeholder=" "
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="flex__checkbox">
                  <div>
                    <input
                      type="checkbox"
                      name="isChecked"
                      defaultChecked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    <span>Remember me</span>
                  </div>
                  <p>
                    <a href="#a">Forgot Password&#63;</a>
                  </p>
                </div>
                <button className="btn__overlay--full" type="submit">
                  Login
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
