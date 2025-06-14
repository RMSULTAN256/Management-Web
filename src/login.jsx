import React, { useEffect } from "react";
import './login.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from 'react-bootstrap/Button';

function Login() {

    useEffect(() => {
        document.body.classList.add("body");
    }, []);

    return (
        <>
            <div className="container-div">
                <div className="header">
                    <div className="text">Sign Up</div>
                    <div className="underline"></div>
                </div>

                <div className="inputs-sign">

                    {/* Username Field */}
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="username" className="form-label fw-bold me-3" style={{ minWidth: '100px'}}>Username</label>
                        <div className="input-group flex-grow-text">
                            <span className="input-group-text">
                                <i className="bi bi-person-fill"></i>
                            </span>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Enter your username"
                                id="username"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-bold">Email</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-envelope-fill"></i>
                            </span>
                            <input 
                                type="email" 
                                className="form-control"
                                placeholder="Enter your email"
                                id="email"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-bold">Password</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-lock-fill"></i>
                            </span>
                            <input 
                                type="password" 
                                className="form-control"
                                placeholder="Enter your password"
                                id="password"
                            />
                        </div>
                    </div>

                    <div className="container-button">
                        <Button className="button" variant="primary" type="submit">
                            Sign Up
                        </Button>
                        <Button className="button" variant="primary" type="submit">
                            Sign In
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
