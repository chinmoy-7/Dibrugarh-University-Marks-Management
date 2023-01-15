import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useData } from "../Context/DataContext";
import "../Assets/Style/addBatch.css";
export default function AddBatch() {
  const data = useData();

  const handleAddBatch = (e) => {
    data.createBatch();
  };

  return (
    <div className="batch-container">
      <div className="batch-content">
        <div className="batch-content-top">
          <h1>{data.course}</h1>
            <div className="details">
          <input
            maxLength={9}
            type="text"
            onChange={(e) => {
              data.setYear(e.target.value);
            }}
            placeholder="xxxx-xxxx"
          />
          <button onClick={handleAddBatch}>ADD</button>
        </div>
        </div>  
        <div className="batch-content-bottom">
            <div className="batch-content-bottom-box ">
            <button>2022-2023</button>
            <button>2022-2023</button>
            <button>2022-2023</button>
            <button>2022-20 23</button>
            <button>2022-20 23</button>
            <button>2022-20 23</button>
            <button>2022-20 23</button>
            <button>2022-20 23</button>
            </div>
        </div>
      </div>
    </div>
  );
}
