import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../Context/AuthContext";

export default function AddBatch() {

    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const course = location.state.course;

    const handleYear = (e) => {
        auth.setBatch(e.target.innerText)
        navigate("/add-update")
    }
    return (
        <div>
            <h1>{course}</h1>
            <p>
                AddBatch
            </p>

            <input type="text" />

            <button>ADD</button>
            <button onClick={handleYear}>2022-2025</button>

        </div >
    )
}
