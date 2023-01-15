import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const DataContext = createContext();


export const DataContextProvider = ({ children }) => {
    const [course, setCourse] = useState("")
    const [year, setYear] = useState("")
    const [allBatch,setAllBatch]=useState()

    const createBatch = async () => {
        // console.log(course, year);
        try {

            if (year === "") {
                return alert("No Empty Values Allowed")
            }
            if (!year.match("^[0-9]+-[0-9]+$")) {
                return alert("Year Format Invalid eg. 2022-2025")
            }
            const headers={"authorization":sessionStorage.getItem("token")};
            console.log(headers)
            const res = await axios.post("http://localhost:3010/api/add/batch",{ course, year },{headers})
            alert("Successfully added")
            console.log(res);
            setYear("")
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        if(course==""){
            setCourse(localStorage.getItem("course"))
            // getBatch();      
        }
    },[])
    //Getting Batch 
    const getBatch=async()=>{
        try{
            // let c=course
            // console.log(course)
            const headers={"authorization":sessionStorage.getItem("token")};
            const getAll=await axios.get(`http://localhost:3010/get/batch/${localStorage.getItem("course")}`,{headers})
            console.log(getAll.data.allBatch)
            for(let i of getAll.data.allBatch){
                if(i.year==year){
                    alert("Batch Already Exists")
                    setYear("")
                    return
                }
            }
            setAllBatch(getAll.data.allBatch)
        }catch(e){
            console.log(e)
        }
    }


    return (
        <DataContext.Provider value={{ course, setCourse, year, setYear, createBatch,getBatch,allBatch }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    return useContext(DataContext);
}

export default DataContext;