import React, { useState, useEffect } from 'react';
import './Login.css';
import creditcard from '../../images/creditcard.jpeg';
import axios from 'axios';
export default function Login(props) {
    const [cardNumber, setCardNumber] = useState();
    const [userDetails, setUserDetails] = useState([]);
    const [Cpin, setCPin] = useState();
    const result = userDetails.find(({ cardnumber, pin }) => cardnumber === cardNumber && pin === Cpin)
    const handleCredentials =  () => {
        if (result) {
            window.alert('Authenticated Successfully');
            const answer = window.confirm('Confirm your pay?');
            if (answer) {
                result['balance'] -=  props.location.Amount;
                axios
                .patch(`http://localhost:3000/user/${result.cardnumber}`, {
                    balance: result['balance'],
                })
                .then(() => {
                    window.alert('Amount Debited Successfully');
                    window.location.pathname = "/buy";
                })
                .catch((err) => {
                    console.log(err);
                });
             
            }
        } else {
            window.alert('Wrong Card Number or Pin');
        }
    };
  
    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get(`http://localhost:3000/user`)
                .then((res) => {
                    setUserDetails(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchData();
    }, []);
    return (
        <div className="creditcard">
            <div>
                <img className="creditcardImg" src={creditcard} alt="image1" />
            </div>

            <div className="form">
                <div className="bg"></div>
                <form>
                    <h1 className="header1">Welcome</h1>
                    <div className="inputs">
                        <input
                            type="text"
                            name="Cardnumber"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="Card Number"
                        />

                        <input
                            type="password"
                            value={Cpin}
                            name="Password"
                            placeholder="pin"
                            onChange={(e) => setCPin(e.target.value)}
                        />
                    </div>
                </form>

                <footer>
                    <h3>Total Amount : ${props.location.Amount}</h3>
                    <button onClick={() => handleCredentials()}>Continue</button>
                </footer>
            </div>
        </div>
    );
}
