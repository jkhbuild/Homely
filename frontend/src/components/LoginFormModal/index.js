import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";

function LoginFormModal({ showSignup, showSignin, signinModal }) {
  return (
    <>
      <button className="auth-buttons" onClick={() => showSignin(true)}>
        Log In
      </button>
      {signinModal && (
        <Modal onClose={() => showSignin(false)}>
          <LoginForm
            onClose={() => showSignin(false)}
            showSignup={showSignup}
          />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
