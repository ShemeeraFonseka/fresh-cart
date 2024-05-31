import React, { useState, setState } from "react";
import './Intro/Intro.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginFailed from "./loginFailedAlert";
import Cookies from "js-cookie";
import Vector1 from "../img/Log.png";
import { useContext } from 'react';
import { themeContext } from '../Context';
import Header from "./registerForm";

function LoginForm() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
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
        e.preventDefault();

        if (!userName || !password) {
            setError("All fields are required");
            return;
        }

        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        // Check if the username and password match
        const user = users.find(user => user.userName === userName && user.password === password);
        if (user) {
            Cookies.set("name", userName, { expires: 7 });
            navigate('/shop-items');
            setFormSuccess("true");
        } else {
            setFormSuccess("false");
            setError("Incorrect username or password.");
        }
    };

    return (
        <div className="login-page" id='login'>
            <form className="loginform">
                <p style={{ fontSize: "30px", fontWeight: "bold" }}>Login</p>
                <br />
                <input placeholder="Username" value={userName} id="userName" onChange={(e) => handleInputChange(e)} type="text" className="login-input" />
                <div>
                    <div></div>
                </div>

                <br></br><br></br>


                <input placeholder="Password" type="password" value={password} id="password" onChange={(e) => handleInputChange(e)} className="login-input" />
                <div>
                    <div></div>
                </div>

                <br></br><br></br>
                <button onClick={(e) => handleSubmit(e)} className="login-button" type="button" >
                    Login
                </button>
                {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

                <p style={{ fontSize: "14px" }}>Not registered? <a style={{ fontSize: "14px", color: "#329242" }} href="/register">Create an account</a></p>
                <br />
                <br />

            </form>
           
        </div>

    );
}
export default LoginForm;
