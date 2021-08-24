import React from "react";
import { signInWithGoogle } from "../../firebase/config";
import useUser from "../../hooks/useUser";

export default function Login() {
  const { uid } = useUser();

  if (!uid) {
    return (
      <div className="login-buttons">
        <button className="loginBtn" onClick={signInWithGoogle}>
          <span> Logg inn med Google</span>
        </button>
      </div>
    );
  } else {
    return <p>Sign in</p>;
  }
}
