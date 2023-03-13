

import React, { useState } from 'react';
import './form.css'


import Axios from "axios"

function Form(props) {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');




    //function to change the name of the user everytime 
    const handleNameChange = (e) => {
        console.log("name was changed");
        console.log(e.target.value);
        setName(e.target.value)
    }
    const handleChangeDob = (e) => {
        console.log("dob was changed ");
        console.log(e.target.value);
        setDob(e.target.value);

        const dobDate = new Date(e.target.value);
        const ageInMs = Date.now() - dobDate.getTime();
        const ageDate = new Date(ageInMs);
        const aage = Math.abs(ageDate.getUTCFullYear() - 1970); // Calculate the age in years
        setAge(aage);
        console.log(age);

    }

    const handleChangeEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value);


    }

    const handleChangePhoneNumber = (e) => {
        console.log(e.target.value);
        setPhone(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        // age validation 
        if (age < 18) {
            alert("Sorry, you must be at least 18 years old to proceed");
            return;

        }

        //mail validation 
        const re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        // phone no validation
        const phoneRegex = /^\d{10}$/; // regular expression to match 10-digit phone number format
        if (!phoneRegex.test(phone)) {
            alert('Phone number must be in 10-digit format');
            return;
        }


        Axios.post("http://localhost:3001/api/insertUser", {
            uname: name,
            udob: dob,
            uemail: email,
            uphone: phone

        }).then((response) => {
            if (response.data.status == "fail")
                alert(response.data.message)
            else {
                props.changeComponent();

                alert(response.data.message);
            }

        });
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />


                <label htmlFor="dob">Date of Birth</label>
                <input
                    type="date"

                    id="dob"
                    value={dob}
                    onChange={handleChangeDob}
                    required
                    max={new Date().toISOString().split("T")[0]}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleChangeEmail}
                    required
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={handleChangePhoneNumber}
                    required
                />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;
