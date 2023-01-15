import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DataContext = createContext();


export const DataContextProvider = ({ children }) => {

    const [course, setCourse] = useState("")
    const [year, setYear] = useState("")

    console.log(course, year, "suiiii");

    const createBatch = async () => {
        console.log(course, year);
        try {

            if (year === "") {
                return alert("No Empty Values Allowed")
            }
            if (!year.match("^[0-9]+-[0-9]+$")) {
                return alert("Year Format Invalid eg. 2022-2025")
            }
            
            const res = await axios.post("http://localhost:3010/api/add/batch", { course, year })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <DataContext.Provider value={{ course, setCourse, year, setYear, createBatch }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    return useContext(DataContext);
}

export default DataContext;