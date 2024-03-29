import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const DataContext = createContext();


export const DataContextProvider = ({ children }) => {

    const headers = { "authorization": sessionStorage.getItem("token") };



    const [students, setStudents] = useState(null)

    const getStudsBySem = async (id) => {

        console.log("hit");

        try {
            const res = await axios.post(`http://localhost:3010/api/batch/getStudents`,
                {
                    year: localStorage.getItem("year"),
                    course: localStorage.getItem("course"), id
                }, { headers })


            setStudents(res.data)


        } catch (error) {
            console.log(error);
        }
    }


    const updateMarks = async (data) => {
        try {
            const res = await axios.put("http://localhost:3010/api/batch/update-marks", data, { headers })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }



    // ----------------------------------------------COURSE-----------------------------------------------//



    const [course, setCourse] = useState("")
    const [year, setYear] = useState("")
    const [allBatch, setAllBatch] = useState(null)

    const createBatch = async () => {
        // console.log(course, year);
        try {

            if (year === "") {
                return alert("No Empty Values Allowed")
            }
            if (!year.match("^[0-9]+-[0-9]+$")) {
                return alert("Year Format Invalid eg. 2022-2025")
            }
            if (checkBatch(year)) {
                return
            }

            console.log(headers)
            const res = await axios.post("http://localhost:3010/api/add/batch", { course, year }, { headers })
            alert("Successfully added")
            getBatch()
            // console.log(res);
            setYear("")
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (course == "") {
            setCourse(localStorage.getItem("course"))
            // getBatch();      
        }
    }, [])


    // check if batch exists

    const checkBatch = () => {
        if (allBatch) {
            for (let i of allBatch) {
                if (i.year == year) {
                    alert("Batch Already Exists")
                    setYear("")
                    return true
                }
            }
        }
    }



    //Getting Batch 
    const getBatch = async () => {
        try {
            // let c=course
            console.log("here after")
            const headers = { "authorization": sessionStorage.getItem("token") };
            const getAll = await axios.get(`http://localhost:3010/get/batch/${localStorage.getItem("course")}`, { headers })
            setAllBatch(getAll.data.allBatch)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <DataContext.Provider value={{
            course, setCourse, year, setYear,
            createBatch, getBatch, allBatch,
            students, setStudents, getStudsBySem, updateMarks
        }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    return useContext(DataContext);
}

export default DataContext;