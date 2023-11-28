import { Link, useNavigate  } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AuthService from "../services/AuthService";


function Login() {

    const [credentials, setCredentials] = useState({ Username: '', Password: '' });
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataUser = { Body: credentials };
            const res = await AuthService.login(dataUser);
            let data = res.data;
            if (data.IsOK) {
                localStorage.setItem('token', data.Body.Token);
                localStorage.setItem('user', JSON.stringify(data.Body.UserLoginData));
                navigate("/users/all");
            } else {
                setIsError(true);
            }
        } catch (error) {
            console.log("Error on [Login | handleSubmit] -> ", error);
        }
    };

    return (
        <>
            <div className='container pt-5'>
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className='card px-4 py-5'>
                            <h3 className="text-center">Login</h3>
                            {isError ? (
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    Authentication failed. Invalid user or password.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            ) : (null)}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="text" name="Username" value={credentials.Username} onChange={handleChange} className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" name="Password" value={credentials.Password} onChange={handleChange} className="form-control" required />

                                </div>
                                <button type="submit" className="btn btn-success w-100 mb-3">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
