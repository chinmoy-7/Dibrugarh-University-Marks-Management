import { useNavigate } from "react-router-dom"

export default function Semester() {

    const navigate = useNavigate();


    return (
        <div>
            <h1>
                Choose Semester {localStorage.getItem("course")}
            </h1>

            <div>
                <button onClick={(e) => {
                    localStorage.setItem("semester", e.target.innerText)
                    navigate("/students-details")
                }} className="btn btn-primary mx-2">1</button>

                <button onClick={(e) => {
                    localStorage.setItem("semester", e.target.innerText)
                    navigate("/students-details")
                }} className="btn btn-primary mx-2">2</button>

                <button onClick={(e) => {
                    localStorage.setItem("semester", e.target.innerText)
                    navigate("/students-details")
                }} className="btn btn-primary mx-2">3</button>

                <button onClick={(e) => {
                    localStorage.setItem("semester", e.target.innerText)
                    navigate("/students-details")
                }} className="btn btn-primary mx-2">4</button>

                {localStorage.getItem("course") == "BCA" &&
                    <>
                        <button onClick={(e) => {
                            localStorage.setItem("semester", e.target.innerText)
                            navigate("/students-details")
                        }} className="btn btn-primary mx-2">5</button>

                        <button onClick={(e) => {
                            localStorage.setItem("semester", e.target.innerText)
                            navigate("/students-details")
                        }} className="btn btn-primary mx-2">6</button>
                    </>
                }

            </div>
        </div >
    )
}
