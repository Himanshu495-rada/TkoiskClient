import { useState } from "react";
import { useRecoilState } from "recoil";
import styles from "./Login.module.css";
import symbol from "../../../Assets/symbol-bgr.png";
import { CurrentUser, loginUser } from "../../../Services/UserService";
import { loginState } from "../../../State/atoms/loginState";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation, gql } from "@apollo/client";
import client from "../../../apolloClient";

function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const [isLoggedIn, setisLoggedIn] = useRecoilState(loginState);
  const [isLoading, setisLoading] = useState(false);
  const [errMsg, seterrMsg] = useState(null);
  const navigate = useNavigate();

  const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
      }
    }
  `;

  const ME = gql`
    query Query {
      me {
        username
        name
        _id
      }
    }
  `;

  const [login] = useMutation(LOGIN, {
    onCompleted: async (data) => {
      setisLoading(false);
      localStorage.setItem("authToken", data.login.token);
      const {
        loading,
        error,
        data: userData,
      } = await client.query({
        query: ME,
      });
      if (userData) {
        console.log(userData);
        localStorage.setItem("username", userData.me.username);
        localStorage.setItem("name", userData.me.name);
        localStorage.setItem("user_id", userData.me._id);
        setisLoggedIn(true);
        navigate("/main/home");
        //window.location.reload();
      } else {
        seterrMsg("something went wrong!");
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = async (e) => {
    setisLoading(true);
    e.preventDefault();
    await login({
      variables: { email: credentials.email, password: credentials.password },
    });
  };

  const onChange = (e) => {
    seterrMsg(null);
    setisLoading(false);
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.App}>
      <div className={styles.login_container}>
        <div className={styles.floating_icon}>
          <img src={symbol} alt="" />
        </div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          {errMsg !== null ? (
            <div
              className={`alert alert-danger d-flex align-items-center`}
              role="alert"
            >
              <i className={`bi bi-exclamation-triangle`}></i>
              <div>{errMsg}</div>
            </div>
          ) : (
            errMsg
          )}

          <input
            className={styles.login_email}
            type="email"
            placeholder="Email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            required
          />
          <input
            className={styles.login_password}
            type="password"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            required
          />
          <button type="submit">
            {isLoading ? (
              <div
                className={`spinner-border spinner-border-sm text-light`}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Log In"
            )}
          </button>
        </form>
        <div className={styles.extra_links}>
          <Link to={"/join/forgotpwd"}>Forgot Password</Link>
          <span>|</span>
          <Link to={"/join/signup"}>Register Here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
