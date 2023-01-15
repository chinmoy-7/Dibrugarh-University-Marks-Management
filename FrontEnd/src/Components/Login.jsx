import { useLocation, useNavigate, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useState } from "react";

import { useAuth } from "../Context/AuthContext";
import Admin_Key_Modal from "./Admin_Key_Modal";
import { useEffect } from "react";


export default function Login() {

    const auth = useAuth()
    const location = useLocation();


    const [modalShow, setModalShow] = useState(false)

    const value = location.state.value

    useEffect(() => {
        if (value === "Admin") {
            setModalShow(true)
        }

    }, [])

    const [userData, setUserData] = useState({ email: "", password: "" })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }


    return (
        <div>

            {value === "Admin" && <>

                <Admin_Key_Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>}

            {!modalShow &&
                <div className='container'>
                    <h1>
                        {value} Login
                    </h1>
                    <div className="form-floating mb-3">
                        <input onChange={(e) => { handleInput(e) }} name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={(e) => { handleInput(e) }} name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button onClick={() => { auth.Login(userData) }} className='btn btn-dark' type='submit'>Login</button>
                    {value === "Admin" && <p>Need An Account.
                        <Link to={"/sign-up"}>
                            Signup
                        </Link>
                    </p>}
                </div>

            }
        </div >
    )
}
