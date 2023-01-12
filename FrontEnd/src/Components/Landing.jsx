import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../Assets/Style/Landing.css"
import { useAuth } from "../Context/AuthContext"

export default function Landing() {

    const navigate = useNavigate()

    const auth = useAuth()

    useEffect(() => {
        console.log("lamnnding",auth.isLoggedIn);

        if (auth.isLoggedIn) {
            navigate("/select-course")
        }
    }, [])

    return (
        <div className="landing-container">
            <div>
                <h1>
                    Dibrugarh University
                </h1>
            </div>

            <div className="logo">
                <img src="./logo.png" alt="" />
            </div>

            <p>Welcome!!</p>
            <p>Choose your Destination</p>

            <div className="buttons">
                <button onClick={() => { navigate("/log-in", { state: { value: "Student" } }) }}>
                    Student
                </button>

                <button onClick={() => { navigate("/log-in", { state: { value: "Admin" } }) }}>
                    Admin
                </button>
            </div>
        </div>
    )
}
