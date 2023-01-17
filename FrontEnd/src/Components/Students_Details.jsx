import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../Context/DataContext"

export default function Students_Details() {

    const data = useData();

    const [filtered, setFiltered] = useState(false)


    useEffect(() => {

        data.getStudsBySem()
    }, [])


    const handleSearch = (e) => {
        console.log(e);
        const res = data.students.filter(stud => {

            if (stud.rollno === e) {
                return stud
            }
        })
        setFiltered(res[0])
    }
    const navigate = useNavigate()

    const takeToUpdate = (stud) => {
        if (stud) {
            navigate("/update-marks", { state: { student: stud } })
        } else
            navigate("/update-marks", { state: { student: filtered } })
    }


    return (
        <div className="container">
            Students_Details
            <input type="text" onChange={(e) => { handleSearch(e.target.value) }} />
            <table className="table table-striped-columns" style={{
                width: "100%",
                borderCollapse: "collapse",
                tableLayout: "fixed",
            }}>
                <thead>
                    <tr>
                        <th>
                            Roll NO
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Select
                        </th>
                    </tr>
                </thead>

                {!filtered ? <tbody>

                    {data.students && data.students.map((stud, idx) => {

                        return (
                            <tr key={idx}>
                                {console.log(stud)}
                                <td>{stud.rollno}</td>
                                <td>{stud.name}</td>
                                <td>{stud.email}</td>
                                <td onClick={() => { takeToUpdate(stud) }}>➡</td>
                            </tr>
                        )
                    })}

                </tbody>
                    :
                    <tbody>
                        <tr>
                            <td>{filtered.rollno}</td>
                            <td>{filtered.name}</td>
                            <td>{filtered.email}</td>
                            <td onClick={(stud) => { takeToUpdate() }}>➡</td>
                        </tr>
                    </tbody>
                }
            </table>
        </div>
    )
}
