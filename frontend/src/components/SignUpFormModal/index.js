import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "./SignUpForm";

function SignUpFormModal({ showSignin, showSignup, signupModal }) {
  return (
    <>
      <button className="auth-buttons" onClick={() => showSignup(true)}>
        Sign Up
      </button>
      {signupModal && (
        <Modal onClose={() => showSignup(false)}>
          <SignUpForm
            onClose={() => showSignup(false)}
            showSignin={showSignin}
          />
        </Modal>
      )}
    </>
  );
}

export default SignUpFormModal;
