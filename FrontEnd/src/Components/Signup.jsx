import { useLocation, useNavigate, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useState } from "react";

import { useAuth } from "../Context/AuthContext";
import Admin_Key_Modal from "./Admin_Key_Modal";
import { useEffect } from "react";

export default function Signup() {

  const auth = useAuth();

  const [userData, setUserData] = useState({ email: "", password: "", confirm_password: "" })

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value })
  }

  return (
    <div className='container'>
      <h1>
        Signup
      </h1>
      <div className="form-floating mb-3">
        <input onChange={(e) => { handleInput(e) }} name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input onChange={(e) => { handleInput(e) }} name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-floating mb-3">
        <input onChange={(e) => { handleInput(e) }} name="confirm_password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Confirm Password</label>
      </div>

      <button onClick={() => { auth.Signup(userData) }} className='btn btn-dark' type='submit'>Signup</button>
    </div>
  )
}
