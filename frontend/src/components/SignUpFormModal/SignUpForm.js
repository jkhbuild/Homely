import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
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

  const [displayErrors, setDisplayErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmPassword: "",
  });

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName) {
      setDisplayErrors((prev) => ({
        ...prev,
        firstName: "*Please enter a first name",
      }));
    } else {
      setDisplayErrors((prev) => ({
        ...prev,
        firstName: "",
      }));
    }

    if (!lastName) {
      setDisplayErrors((prev) => ({
        ...prev,
        lastName: "*Please enter a last name",
      }));
    } else {
      setDisplayErrors((prev) => ({
        ...prev,
        lastName: "",
      }));
    }

    if (!email) {
      setDisplayErrors((prev) => ({
        ...prev,
        email: "*Please enter a valid email address",
      }));
    } else {
      setDisplayErrors((prev) => ({
        ...prev,
        email: "",
      }));
    }

    if (password.length < 10) {
      setDisplayErrors((prev) => ({
        ...prev,
        password:
          "*This value is too short. It should have 10 characters or more.",
      }));
    } else {
      setDisplayErrors((prev) => ({
        ...prev,
        password: "",
      }));
    }

    if (password !== confirmPassword) {
      setDisplayErrors((prev) => ({
        ...prev,
        confirmPassword: "*The value should be the same",
      }));
    } else {
      setDisplayErrors((prev) => ({
        ...prev,
        confirmPassword: "",
      }));
    }

    console.log(password);
    console.log(confirmPassword);
    if (password === confirmPassword) {
      setErrors([]);
      console.log(password);
      console.log(confirmPassword);
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
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
  };

  return (
    <>
      <form id="sign-up" onSubmit={handleSubmit}>
        <div class="modal-header">
          <p> Create an Account</p>
          <button class="modal-close-button">
            <i class="fa-solid fa-xmark fa-2xl"></i>
          </button>
          <p id="sign-in-instead">
            Or, &nbsp;
            <a id="signup-signin" href="">
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
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <div className="error-display">
              {displayErrors.firstName && <p>{displayErrors.firstName}</p>}
            </div>
          </fieldset>
        </div>
        <div class="form-half-size">
          <fieldset class="form-text">
            <label class="user-input">
              Last Name
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <div className="error-display">
              {displayErrors.lastName && <p>{displayErrors.lastName}</p>}
            </div>
          </fieldset>
        </div>

        <div class="form-full-size">
          <fieldset class="form-text">
            <label class="user-input">
              Email Address
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <div className="error-display">
              {displayErrors.email && <p>{displayErrors.email}</p>}
            </div>
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
              />
            </label>
            <div className="error-display">
              {displayErrors.password && <p>{displayErrors.password}</p>}
            </div>
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
              />
            </label>
            <div className="error-display">
              {displayErrors.confirmPassword && (
                <p>{displayErrors.confirmPassword}</p>
              )}
            </div>
          </fieldset>
        </div>

        <div class="sign-up-button-container">
          <button class="sign-up-button" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
