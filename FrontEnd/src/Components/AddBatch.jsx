import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../Context/AuthContext";
import { useData } from "../Context/DataContext";

export default function AddBatch() {

    const data = useData();

    const handleAddBatch = (e) => {
        data.createBatch()
    }

    return (
        <div>
            <h1>{data.course}</h1>
            <p>
                AddBatch
            </p>

            <input maxLength={9} type="text" onChange={(e) => { data.setYear(e.target.value) }} placeholder="xxxx-xxxx" />

            <button onClick={handleAddBatch}>ADD</button>

        </div >
    )
}
