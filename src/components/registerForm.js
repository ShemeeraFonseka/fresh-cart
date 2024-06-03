import React, { useState, setState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { themeContext } from '../Context';
import './Intro/Intro.css';

function Header() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    const [error, setError] = useState(null);

    const navigateLogin=()=>{
        navigate("/login");
    }
    

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "userName") {
            setUserName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "phoneNo") {
            setPhoneNo(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "conpassword") {
            setConPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userName || !email || !phoneNo || !password || !conpassword) {
            setError("All fields are required");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Invalid email format.");
            return;
        }

        if (!/^\d+$/.test(phoneNo)) {
            setError("Phone number should contain only numbers.");
            return;
        }

        if (password !== conpassword) {
            setError("Passwords do not match");
            return;
        }

        const userData = { userName, email, phoneNo, password };

        // Retrieve existing users from localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        // Check if the username already exists
        const userExists = users.some(user => user.userName === userName);
        if (userExists) {
            setError("Username already exists");
            return;
        }

        // Add new user to the list and save it back to localStorage
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));

        console.log("Successfully Registered");
        navigate('/login');
        setUserName("");
        setPassword("");
        setEmail("");
        setConPassword("");
        setPhoneNo("");
    };

    return (
        <div className="signup-page" >
            <form className="signupform">
            <p style={{ fontSize: "30px", fontWeight: "bold" }}>Signup</p>
                <br />

                <input placeholder="User Name" value={userName} id="userName" onChange={(e) => handleInputChange(e)} type="text" className="login-input" />
                <div>
                    <div></div>
                </div>

                <br></br><br></br>

                

                <input placeholder="Email" value={email} id="email" onChange={(e) => handleInputChange(e)} type="text" className="login-input" />
                <div>
                    <div></div>
                </div>

                <br></br><br></br>

                <input placeholder="Phone Number" value={phoneNo} id="phoneNo" onChange={(e) => handleInputChange(e)} type="text" className="login-input" />
                <div>
                    <div></div>
                </div>

                <br></br><br></br>

                

                <input placeholder="Password" value={password} id="password" onChange={(e) => handleInputChange(e)} type="password" className="login-input" />
                <div>
                    <div></div>
                </div>

                <br></br><br></br>

                <input placeholder="Confirm Password" value={conpassword} id="conpassword" onChange={(e) => handleInputChange(e)} type="password" className="login-input" />
                <div>
                    <div></div>
                </div>

                <br></br><br></br>



                <button onClick={(e) => handleSubmit(e)} className="login-button" type="submit">
                    Sign Up
                </button>
                <br />

                {error && <p style={{ color: "red" ,fontSize:"14px"}}>{error}</p>}

                <p style={{ fontSize: "14px" }}>Already registered? <a style={{ fontSize: "14px", color: "#329242",cursor:"pointer" }} onClick={navigateLogin}>Login</a></p>
            </form>

        </div>
    );
}
export default Header;