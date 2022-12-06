import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password })).catch(
      async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );
  };

  return (
    <div>
      <form id="sign-in" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <div class="modal-header">
          <p> Sign into your account </p>
          <button class="modal-close-button">
            <i class="fa-solid fa-xmark fa-2xl"></i>
          </button>
          <p id="sign-up-instead">
            Or, &nbsp;
            <a id="signin-signup" href="/">
              create an account
            </a>
          </p>
        </div>
        <div class="form-full-size">
          <fieldset class="form-text">
            <label class="user-input">
              Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </fieldset>
        </div>

        <div class="form-full-size">
          <fieldset class="form-text">
            <label class="user-input">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </fieldset>
        </div>

        <div class="login-button-container">
          <button class="login-button" type="submit">
            Log In
          </button>
        </div>
      </form>
      <div class="demo-button-container">
        <button
          class="demo-button"
          onClick={() => {
            dispatch(
              sessionActions.login({
                email: "demo@user.io",
                password: "password",
              })
            );
          }}
        >
          Demo User
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
