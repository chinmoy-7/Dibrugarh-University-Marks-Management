import { useNavigate } from "react-router-dom"
import { useData } from "../Context/DataContext";
import '../Assets/Style/selected.css'
export default function SelectCourse() {

    const data = useData();
    const navigate = useNavigate();

    const handleCourse = (e) => {

        data.setCourse(e.target.innerText)
        console.log(data.course);
        navigate("/add-batch")
    }

    return (
        <div className="select-course-container">
            <h1>Select Course</h1>
            <button className="btn btn-primary mx-2 btns" onClick={handleCourse}>BCA</button>
            <button className="btn btn-primary mx-2 btns" onClick={handleCourse}>MCA</button>
            <button className="btn btn-primary btns" onClick={handleCourse}>PGDCA</button>
        </div>
    )
}
