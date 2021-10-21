import React from "react";
import "./Login.css";
import creditcard from "../../images/creditcard.jpeg"
export default function Login(props) {
  return (
    <div className="creditcard">
      <div>
        <img className = "creditcardImg" src={creditcard} alt="image1" />
      </div>

      <div className="form">
        <div className="bg"></div>
        <form>
          <h1 className = "header1">Welcome</h1>
          <div className="inputs">
            <input
              type="text"
              name="Cardnumber"
              placeholder="Card Number"
            />

            <input type="password" name="Password" placeholder="pin" />

          
          </div>
        </form>
        
        <footer>
        <h3>Total Amount : {props.location.Amount}</h3>
          <button>Continue</button>
        </footer>
      </div>
    </div>
  );
}
