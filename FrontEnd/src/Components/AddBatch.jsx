import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useData } from "../Context/DataContext";
import "../Assets/Style/addBatch.css";
import { useEffect } from "react";
export default function AddBatch() {
  const data = useData();

  const [del,setDel]=useState(false)
  const [selectedDel,setSelectedDel]=useState(false);
  const [selectedYear,setSelectedYear]=useState()

  const handleAddBatch = (e) => {
    data.createBatch();
  };
  useEffect(()=>{
    data.getBatch()
  },[])

  const handleDeleteBatch=()=>{
    setDel(true);
  }


  const handleDelete=(id,year)=>{
    if(del){
    setSelectedDel(true);
    }
    setSelectedYear(year)
    console.log(id)
  }


  return (
    <div className="batch-container">
      <div className={selectedDel?"batch-content blur":"batch-content"}>
        <div className="batch-content-top">
          <h1>{data.course}</h1>
            <div className="details">
          <input
            maxLength={9}
            minLength={9}
            type="text"
            value={data.year}
            disabled={del}
            onChange={(e) => {
              data.setYear(e.target.value);
            }}
            placeholder={!del?"xxxx-xxxx":"Select The Batch"}
          />
          {!del&&<button onClick={handleAddBatch}>ADD</button>}
          <button className="btn btn-danger" onClick={handleDeleteBatch}>Delete</button>
          {del&&  <button className="btn btn-danger" onClick={()=>{setDel(false)}}>Cancel</button>}
        </div>
        </div>  
        <div className="batch-content-bottom">
            <div className="batch-content-bottom-box ">
              {data?.allBatch?.map((item,id)=>{
                console.log(data.allBatch)
                return(
                  <button key={id}  onClick={(e)=>{handleDelete(item._id,item.year)}}>{item.year}</button>
                )
              })}
            </div>
        </div>
      </div>
      {(selectedDel&&del)&&<div id="deleteData" className={selectedDel?"noblur":""}>
                <h2>Are you Sure?</h2>
                <h4>{selectedYear}</h4>
                <div>
                  <button>Yes</button>
                  <button onClick={()=>{setSelectedDel(false)}}>Cancel</button>
                </div>
              </div>}
    </div>
  );
}
