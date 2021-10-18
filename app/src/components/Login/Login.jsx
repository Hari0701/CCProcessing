import React from "react";
import "./Login.css";
const image1 = `${process.env.PUBLIC_URL}/assets/creditcard.jpeg`;
export default function Login() {
  return (
    <div className="creditcard">
      <div>
        <img src={image1} alt="image1" />
      </div>

      <div className="form">
        <div className="bg"></div>
        <form>
          <h1>Welcome</h1>
          <div className="inputs">
            <input
              type="text"
              name="Username"
              placeholder="username or email"
            />

            <input type="password" name="Password" placeholder="password" />

            <p className="light">
              <a href="#">Forgot password?</a>
            </p>
          </div>
        </form>
        <footer>
          <button>Continue</button>
          <p>
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
