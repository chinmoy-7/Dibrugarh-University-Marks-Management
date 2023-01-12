import { useNavigate } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"
export default function SelectCourse() {

    const auth = useAuth();
    const navigate = useNavigate();

    const handleCourse = (e) => {
        auth.setCourse(e.target.innerText)
        navigate("/add-batch", { state: { course: e.target.innerText } })
    }

    return (
        <div className="container">
            SelectCourse
            <button className="btn btn-primary mx-2" onClick={handleCourse}>BCA</button>
            <button className="btn btn-primary mx-2" onClick={handleCourse}>MCA</button>
            <button className="btn btn-primary" onClick={handleCourse}>PGDCA</button>
        </div>
    )
}
