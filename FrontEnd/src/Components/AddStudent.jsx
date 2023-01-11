import React from 'react'

export default function AddStudent() {
    return (
        <div className='container'>AddStudent
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating  mb-3">
                <input type="text" className="form-control" id="floatingPassword" placeholder="Name" />
                <label for="floatingPassword">Name</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>

            <button className='btn btn-dark' type='submit'>Submit</button>
        </div>
    )
}
