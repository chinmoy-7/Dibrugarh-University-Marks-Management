import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"
import '../Assets/Style/main.css'
export default function Main({ children }) {
    const navigate = useNavigate()

    const auth = useAuth();

    const handleLogout = () => {
        sessionStorage.clear()
        auth.setIsLoggedIn(false)
        navigate("/", { replace: true })
        alert("logged OUT")
    }

    return (
        <div>
            {children}

            {sessionStorage.getItem("token") ?
                <button id="btn-logout"className="btn btn-danger" onClick={handleLogout}>Logout</button> :
                <></>
            }
        </div>
    )
}
