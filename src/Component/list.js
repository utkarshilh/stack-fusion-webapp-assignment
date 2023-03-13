


import React, { useState } from 'react';
import { useEffect } from 'react'
import './list.css';
import Axios from "axios"
//import your CSS file here


const List = () => {
    const [users, setUser] = useState([])

    useEffect(() => {
        console.log("useEffect executed");
        Axios.get("http://localhost:3001/api/GetUser").then(
            (response) => {

                setUser(response.data);
                // console.log(response.data);


            }
        );
    }, []);

    return (
        <div>

            <h1> All Filled Form </h1>

            <div className="card-container">
                {users.map((users) => (

                    <div>
                        <div className="card" >
                            <h3>{users.name}</h3>
                            <p>Dob: {users.dob}</p>
                            <p>Email: {users.email}</p>
                            <p>Phone: {users.phone}</p>
                        </div>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
