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
        <div>
            SelectCourse
            <button onClick={handleCourse}>BCA</button>
            <button onClick={handleCourse}>MCA</button>
            <button onClick={handleCourse}>PGDCA</button>
        </div>
    )
}
