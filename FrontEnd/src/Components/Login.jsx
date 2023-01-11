import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import { useAuth } from "../Context/AuthContext";

export default function Login() {

    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation();
    const value = location.state.value

    const [userData, setUserData] = useState({ email: "", password: "" })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }


    return (
        <div>
            {value} Login
            <div className='container'>
                <div className="form-floating mb-3">
                    <input onChange={(e) => { handleInput(e) }} name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input onChange={(e) => { handleInput(e) }} name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button onClick={() => { auth.Login(userData) }} className='btn btn-dark' type='submit'>Login</button>
            </div>
        </div >
    )
}
