import { useNavigate } from "react-router-dom"
import "../Assets/Style/add_update.css"
export default function Add_Update() {
    const navigate = useNavigate();
    return (
        <div className="functionalities-container">
            <div className="functionality-content">

                <button onClick={() => { navigate("/add-student") }}>ADD students</button>
                <button onClick={() => { navigate("/choose-semester") }}>Update Marks</button>
                <button>Add Subjects</button>

            </div>
        </div>
    )
}
