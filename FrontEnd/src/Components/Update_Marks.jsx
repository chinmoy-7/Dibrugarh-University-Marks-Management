import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { useData } from '../Context/DataContext';

export default function Update_Marks() {

    const data = useData()

    const location = useLocation()

    const [subjects, setSubjects] = useState([])
    let [marks, setMarks] = useState([])
    const [cancel, setCancel] = useState(false)


    useEffect(() => {

        data.getStudsBySem(location.state.id)

        console.log(data.students[0]);

        let subs = []
        let mar = []

        for (let i of Object.entries(data.students[0].semester[localStorage.getItem("semester") - 1])) {
            subs.push(i[0])
            mar.push(i[1])
        }

        setSubjects(subs)
        setMarks(mar)
        console.log(subjects, marks);

    }, [cancel])


    const [edit, setEdit] = useState(false)

    const changeMarks = (e, idx) => {

        let temp = [...marks]
        temp[idx] = Number(e.target.value)
        setMarks(temp)
    }

    const saveMarks = (e, idx) => {
        console.log(e.target.value);
        let temp = marks.filter((mark, id) => {
            console.log(mark, id, idx);
            if (id === idx) {
                // console.log(marks[id]);
                return marks[id] = Number(e.target.value)
            } else return mark
        })
        console.log(temp);
        setMarks(temp)
    }


    const handleMarks = (action) => {
        let updatedMarks = {}
        if (action === "cancel") {
            setEdit(false)
            setCancel(!cancel)
        } else if (action === "save") {
            console.log("save");
            for (let i = 0; i < marks.length; i++) {
                updatedMarks[subjects[i]] = marks[i]
            }
        }
        setEdit(false)

        let newMarksArray = [...data.students[0].semester]

        newMarksArray[localStorage.getItem("semester") - 1] = updatedMarks
        console.log(newMarksArray);
        
        let updateData = { newMarksArray, semester: localStorage.getItem("semester") - 1, id: data.students[0]._id }
        data.updateMarks(updateData)
        console.log(updatedMarks);
    }

    return (
        <div className='container'>
            <h1>
                Update Marks
            </h1>

            <div className='d-flex justify-content-around my-4'>

                <div>

                    <div>
                        Name:  {data.students[0].name}
                    </div>
                    <div>
                        RollNo: {data.students[0].rollno}
                    </div>
                </div>

                {!edit && <div>
                    <button onClick={() => { setEdit(true) }} className='btn btn-warning'>Edit</button>
                </div>}

                {edit && <div>
                    <button onClick={() => { handleMarks("save") }} className='btn btn-success'>Save</button>
                    <button onClick={() => { handleMarks("cancel") }} className='btn btn-danger'>Cancel</button>
                </div>}

            </div>


            <table className="table table-striped-columns" style={{
                width: "100%",
                borderCollapse: "collapse",
                tableLayout: "fixed",
            }}>

                <thead>

                    <tr>
                        {subjects?.length && subjects?.map((subject, idx) => {

                            return (

                                <th key={idx}>
                                    {subject}
                                </th>
                            )
                        })}

                    </tr>
                </thead>

                <tbody>

                    <tr>
                        {marks?.length && marks?.map((mark, idx) => {

                            return (

                                <td key={idx}>
                                    <input type="text" style={{
                                        border: "0",
                                        backgroundColor: "transparent"
                                    }} value={marks[idx]} disabled={!edit}
                                        onChange={(e) => { changeMarks(e, idx) }}
                                        onBlur={(e) => { saveMarks(e, idx) }}
                                    />
                                </td>
                            )
                        })}

                    </tr>

                </tbody>
            </table>
        </div >
    )
}
