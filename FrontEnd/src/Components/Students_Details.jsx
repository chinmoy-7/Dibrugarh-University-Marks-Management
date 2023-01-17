import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../Context/DataContext"

export default function Students_Details() {

    const data = useData();

    const [filtered, setFiltered] = useState(false)


    useEffect(() => {
        console.log("rerender3ed");
        data.getStudsBySem()
    }, [])


    const handleSearch = (e) => {


        let regSearch = new RegExp(/[^\0-9\s]/g)

        const res = data.students.filter(stud => {
            return (stud.roll.match(regSearch))
        })
        console.log(res[0]);
        setFiltered(res[0])
    }
    const navigate = useNavigate()

    const takeToUpdate = (id) => {
        console.log(id);
        navigate("/update-marks", { state: { id: id } })
    }


    return (
        <div className="container">
            Students_Details
            <input type="text" onChange={(e) => { handleSearch(e) }} />
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

                    {data.students && data.students.map((stud, id) => {

                        return (
                            <tr key={id}>
                                {console.log(stud)}
                                <td>{stud.rollno}</td>
                                <td>{stud.name}</td>
                                <td>{stud.email}</td>
                                <td onClick={() => { takeToUpdate(stud._id) }}>➡</td>
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
                            <td onClick={(stud) => { takeToUpdate(stud._id) }}>➡</td>
                        </tr>
                    </tbody>
                }
            </table>
        </div>
    )
}
