import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignUpForm.css";

function SignUpForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isProfessional, setIsProfessional] = useState(false);
  const [role, setRole] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({
          email,
          password,
          firstName,
          lastName,
          isProfessional,
          role,
        })
      ).catch(async (res) => {
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
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <>
      <form id="signup" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>

        <div class="modal-header">
          <p> Create an Account</p>
          <button class="modal-close-button">
            <i class="fa-solid fa-xmark fa-2xl"></i>
          </button>
          <p id="sign-in-instead">
            Or, &nbsp;
            <a id="signup-signin" href="/">
              sign into your account
            </a>
          </p>
        </div>

        <div class="form-half-size">
          <fieldset class="form-text">
            <label class="user-input">
              First Name
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
          </fieldset>
        </div>
        <div class="form-half-size">
          <fieldset class="form-text">
            <label class="user-input">
              Last Name
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
          </fieldset>
        </div>

        <div class="form-full-size">
          <fieldset class="form-text">
            <label class="user-input">
              Email Address
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
          <fieldset class="form-checkbox">
            <label>
              I am an industry professional
              <input
                type="checkbox"
                checked={isProfessional}
                onChange={(e) => setIsProfessional(e.target.checked)}
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
        <div class="form-full-size">
          <fieldset class="form-text">
            <label class="user-input">
              Confirm Password
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
          </fieldset>
        </div>

        <div class="login-button-container">
          <button class="login-button" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
