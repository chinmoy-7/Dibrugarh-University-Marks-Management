import { useNavigate } from "react-router-dom"

export default function Add_Update() {
    const navigate = useNavigate();
    return (
        <div>
            Add_Update

            <button onClick={() => { navigate("/add-student") }}>ADD students</button>
            <button>Update marks</button>

        </div>
    )
}
