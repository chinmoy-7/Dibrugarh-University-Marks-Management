import { useNavigate } from "react-router-dom"
import { useData } from "../Context/DataContext";
export default function SelectCourse() {

    const data = useData();
    const navigate = useNavigate();

    const handleCourse = (e) => {

        data.setCourse(e.target.innerText)
        console.log(data.course);
        navigate("/add-batch")
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
