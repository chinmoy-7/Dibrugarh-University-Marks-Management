import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {


    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [selectedCourse,setSelectedCourse]=useState();

    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
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

    // signup function
    const Signup = async (userData) => {
        console.log(userData);
        if (userData.password != userData.confirm_password) {
            return alert("pass do not match")
        }
        try {
            const res = await axios.post("http://localhost:3010/api/signup", userData)
            console.log(res.data);
            if (res.data.status === "success") {
                navigate("/log-in", { state: { value: "Admin" } }, { replace: true })
            } else {
                alert(res.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{ Login, setIsLoggedIn, isLoggedIn, Signup,selectedCourse,setSelectedCourse }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthContext;