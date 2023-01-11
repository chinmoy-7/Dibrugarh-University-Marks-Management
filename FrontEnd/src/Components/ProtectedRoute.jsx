import { Navigate } from 'react-router-dom'
export default function ProtectedRoute({ children }) {
    if (!sessionStorage.getItem("token")) {
        return <Navigate to="/" />
    }
    return children
}