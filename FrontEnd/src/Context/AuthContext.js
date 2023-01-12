import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {


    const [course, setCourse] = useState(null)
    const [batch, setBatch] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        console.log("yes");
        if (sessionStorage.getItem("token")) {
            if (location.pathname === "/" || location.pathname === "log-in" || location.pathname === "/sign-up") {
                return navigate("/select-course")
            }
        }
        // sessionStorage.getItem("token") ? navigate("/select-course", { replace: true }) : navigate("/")
    }, [])

    const Login = async (userData) => {
        console.log(userData);
        try {
            const res = await axios.post("http://localhost:3010/api/login", userData)
            console.log(res.data);
            if (res.data.status === "success") {
                sessionStorage.setItem("token", res.data.token)
                setIsLoggedIn(true)
                navigate("/select-course", { replace: true })
            } else {
                alert(res.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{ batch, setBatch, course, setCourse, Login, setIsLoggedIn, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthContext;