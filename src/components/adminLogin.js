import React, { useState, setState } from "react";
import "./loginForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginFailed from "./loginFailedAlert";
import Cookies from "js-cookie";

function AdminLogin() {
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
            .post("http://localhost:8081/adminlogin", loginData, config)
            .then((response) => {
                console.log(response);
                if (response.data) {
                    Cookies.set("name", userName, { expires: 7 });
                    navigateAdmin();
                    setFormSuccess("true");
                } else {
                    setFormSuccess("false");
                }
            })
            .catch(() => {
                if (mounted) {
                    setFormSuccess("false");
                }
            });
    
        const mounted = true;
        return () => (mounted = false);
    };
    

    function navigateAdmin(event) {
        navigate("/products");
    }

    return (
        <div>
            <form>
                <h2 style={{fontSize:"30px",
            color:"black"}}>Admin Login</h2>
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
                {formSuccess == "true" ? navigateAdmin() : formSuccess == "false" ? <LoginFailed /> : <p></p>}
            </form>
        </div>
    );
}
export default AdminLogin;
