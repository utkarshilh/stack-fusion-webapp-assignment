

// import React, { useState } from 'react';
// import './form.css'

// function Form() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [dob, setDob] = useState('');
//     const [phone, setPhone] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // perform validation and submit form
//     }

//     return (
//         <form onSubmit={handleSubmit} className="form-container">
//             <label htmlFor="name">Name:</label>
//             <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(event) => setName(event.target.value)}
//                 required
//             />

//             <label htmlFor="dob">Date of Birth:</label>
//             <input
//                 type="date"
//                 id="dob"
//                 value={dob}
//                 onChange={(event) => setDob(event.target.value)}
//                 required
//             />

//             <label htmlFor="email">Email:</label>
//             <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//                 required
//             />

//             <label htmlFor="phone">Phone Number:</label>
//             <input
//                 type="tel"
//                 id="phone"
//                 value={phone}
//                 onChange={(event) => setPhone(event.target.value)}
//                 required
//             />

//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// export default Form;


import React, { useState } from 'react';
import './form.css'

function Form() {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, dob, email, phone);
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />


                <label htmlFor="dob">Date of Birth</label>
                <input
                    type="date"
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;
