import React, { useState, setState } from "react";
import "./registerForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "userName") {
            setUserName(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "address") {
            setAddress(value);
        }
        if (id === "phoneNo") {
            setPhoneNo(value);
        }
    };

    const handleSubmit = (e) => {
        //to prevent refresh on submit
        e.preventDefault();
        console.log(email, userName, password);

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
        };

        const registerData = { email: email, userName: userName, password: password, address: address, telephoneNo: phoneNo };
        axios
            .post("http://localhost:8081/register", registerData, config)
            .then((response) => {
                if (response.status == 200) {
                    console.log("Successfully Registered");
                    setUserName("");
                    setPassword("");
                    setEmail("");
                    setAddress("");
                    setPhoneNo("");
                } else {
                    console.log("Registration Failed");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    function navigateLogin(event) {
        navigate("/login");
    }

    return (
        <div>
            <form style={{
    backgroundColor:"#E2FAB5"
  }}>
                <h2 style={{fontSize:"30px",
            color:"black"}}>Sign Up</h2>
                <br />
                <label>
                    <p className="label-txt" style={{color:"black"}}>ENTER YOUR EMAIL</p>
                    <input value={email} id="email" onChange={(e) => handleInputChange(e)} type="email" className="input" />
                    <div className="line-box">
                        <div className="lineReg"></div>
                    </div>
                </label>
                <label>
                    <p className="label-txt" style={{color:"black"}}>ENTER YOUR NAME</p>
                    <input value={userName} id="userName" onChange={(e) => handleInputChange(e)} type="text" className="input" />
                    <div className="line-box">
                        <div className="lineReg"></div>
                    </div>
                </label>
                <label>
                    <p className="label-txt" style={{color:"black"}}>ENTER YOUR PASSWORD</p>
                    <input type="password" value={password} id="password" onChange={(e) => handleInputChange(e)} className="input" />
                    <div className="line-box">
                        <div className="lineReg"></div>
                    </div>
                </label>
                <label>
                    <p className="label-txt" style={{color:"black"}}>ENTER YOUR ADDRESS</p>
                    <input type="address" value={address} id="address" onChange={(e) => handleInputChange(e)} className="input" />
                    <div className="line-box">
                        <div className="lineReg"></div>
                    </div>
                </label>
                <label>
                    <p className="label-txt" style={{color:"black"}}>ENTER YOUR PHONE NUMBER</p>
                    <input type="tel" value={phoneNo} id="phoneNo" onChange={(e) => handleInputChange(e)} className="input" />
                    <div className="line-box">
                        <div className="lineReg"></div>
                    </div>
                </label>
                <button onClick={(e) => handleSubmit(e)} className="register" type="submit">
                    Sign Up
                </button>
                <br />
                <br />
                <button onClick={(e) => navigateLogin(e)} className="login" type="button">
                    Login
                </button>
            </form>
        </div>
    );
}
export default Header;