import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonComp from "../button/buttonComp";
import "./login.css";
import { openNotificationWithIcon } from "../toastComp";
import { textValidation } from "../validationComp/validationComp";
function LoginComp(props) {
  const [email, setEmail] = useState(); //input Field
  const [password, setPassword] = useState(); //input Field
  const [phone, setPhone] = useState(); //input Field
  const [status, setStatus] = useState("signIn"); //flag to check status whether it is sign in or sign up
  const [loginStats, setLoginStats] = useState(false); //flag to check login
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const register = () => {
    //function called on sign up
    if (validateUser()) {
      if (validateEmail()) {
        setStatus("signIn");
        setEmail("");
        setPassword("");
        dispatch({
          type: "REGISTER",
          payload: {
            id: new Date().getTime(),
            email,
            phone,
            password,
          },
        });
        openNotificationWithIcon(
          "success",
          "Success",
          "SignUp Successfully",
          false
        );
      }
    }
  };

  const validateUser = () => {
    if (
      textValidation("Email", email) ||
      textValidation("Password", password)
    ) {
      return false;
    } else return true;
  };
  const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      openNotificationWithIcon(
        "error",
        "Error",
        "You have entered an invalid email address!"
      );
      return false;
    }
  };

  const login = () => {
    //function called on sign In

    if (validateUser()) {
      if (validateEmail()) {
        const payload = users.find(
          (user) => user.email === email && user.password === password
        );
        if (payload) {
          dispatch({
            type: "LOGIN",
            payload,
          });
          setLoginStats(true);
          props.setLogin(true);
          return openNotificationWithIcon(
            "success",
            "Success",
            "Login Successfully",
            false
          );
        } else {
          return openNotificationWithIcon(
            "error",
            "Error",
            "Wrong Credentials",
            false
          );
        }
      }
    }
  };
  return (
    <div>
      <div className="appForm">
        <div>
          <ul className="nav nav-tabs m-3" id="myTab" role="tablist">
            <li className="nav-item " role="presentation">
              <Link //navbar for sign In and sign up button
                className=" mx-5 nav-link "
                onClick={(e) => setStatus("signIn")}
              >
                Sign In
              </Link>
            </li>
            <li className="nav-item  ms-auto" role="presentation">
              <button
                className="nav-link active"
                onClick={(e) => setStatus("signUp")}
              >
                Sign Up
              </button>
            </li>
          </ul>

          <div>
            <label>Email <span className="text-danger">*</span></label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter user name"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {status === "signUp" && (
            <div>
              <label>Phone Number</label>
              <input
                type="number"
                id="phone"
                className="form-control"
                placeholder="Enter your phone"
                name="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          )}
          <div>
            <label>Password <span className="text-danger">*</span></label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            {status === "signIn" ? (
              <Link 
              >
                <ButtonComp color="success" title="Sign In" onClick={login} />
              </Link>
            ) : (
              <ButtonComp color="success" title="Sign Up" onClick={register} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
