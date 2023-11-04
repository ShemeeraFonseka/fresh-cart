import React, { useState, setState } from "react";
import "./loginForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginFailed from "./loginFailedAlert";
import Cookies from "js-cookie";
import Vector1 from "../img/Log.png";

function LoginForm() {
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [formSuccess, setFormSuccess] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "userName") {
            setUserName(value);
        }
        if (id === "password") {
            setPassword(value);
        }
    };

    const handleSubmit = (e) => {
        //to prevent refresh on submit
        e.preventDefault();
        console.log(userName, password);

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
        };

        const loginData = { userName: userName, password: password };
        axios
            .post("http://localhost:8081/login", loginData, config)
            .then((response) => {
                console.log(response);
                if (response.data) {
                    Cookies.set("name", userName, { expires: 7 });
                    window.location.href = 'http://localhost:3000';
                    setFormSuccess("true");
                } else {
                    setFormSuccess("false");
                }
            })
            .catch(setFormSuccess("false"));
    };

    function navigateRegister(event) {
        navigate("/register");
    }

    function navigateHome(event) {
        navigate("/");
    }

    return (
        <div>
            <div>
            <form style={{
    backgroundColor:"#E2FAB5"
  }}>
            
                
                <h2 style={{fontSize:"30px",
            color:"black"}}>Customer Login</h2>
                <br />
                <label>
                    <p className="label-txt" style={{color:"black"}}>USERNAME</p>
                    <input value={userName} id="userName" onChange={(e) => handleInputChange(e)} type="text" className="input" />
                    <div className="line-box">
                        <div className="line"></div>
                    </div>
                </label>
                <label>
                    <p className="label-txt" style={{color:"black"}}>PASSWORD</p>
                    <input type="password" value={password} id="password" onChange={(e) => handleInputChange(e)} className="input" />
                    <div className="line-box">
                        <div className="line"></div>
                    </div>
                </label>
                <button onClick={(e) => handleSubmit(e)} className="login" type="button">
                    Login
                </button>
                <br />
                <br />
                <button onClick={(e) => navigateRegister(e)} className="register" type="submit">
                    Sign Up
                </button>
                <br />
                <br />
                {formSuccess == "true" ? navigateHome() : formSuccess == "false" ? <LoginFailed /> : <p></p>}
            </form>
            </div>
        </div>
        
    );
}
export default LoginForm;
