import React from 'react'
import '../Assets/Style/addstudent.css'
import { useState } from 'react';
import axios from 'axios'
import { useData } from '../Context/DataContext';

export default function AddStudent() {



    const [studentData,setStudentData]=useState({year:localStorage.getItem("token"),name:"",email:"",course:localStorage.getItem("course"),rollno:"",year:localStorage.getItem("year")});


    const handleStudentSubmit=async (e)=>{
        try{
            e.preventDefault();
            const headers = {"authorization":sessionStorage.getItem("token")}
            const newStudent = await axios.post("http://localhost:3010/api/add/students",{studentData},{headers}) 
            if(newStudent.data.status=="failed"){
                alert("Student with this roll exists")
                return;
            }
            alert("succesfully added");
        }catch(e){
            console.log(e);
        }
    }
    return (
        <div className='add-student-container'>
            <form action="">   
                <h1>AddStudent</h1>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>{setStudentData({...studentData,email:e.target.value})}}/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating  mb-3">
                <input type="text" className="form-control" id="floatingPassword" placeholder="Name" onChange={(e)=>{setStudentData({...studentData,name:e.target.value})}}/>
                <label htmlFor="floatingPassword">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control"  placeholder="Roll No" onChange={(e)=>{setStudentData({...studentData,rollno:e.target.value})}}/>
                <label htmlFor="floatingPassword">Roll No</label>
            </div>
            <div id="add-submit">
            <button className='btn btn-primary' type='submit' onClick={handleStudentSubmit}>Submit</button>
            </div>
            </form>

        </div>
    )
}
