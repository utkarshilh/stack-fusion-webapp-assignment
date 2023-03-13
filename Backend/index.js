const express = require('express');
const bodyParser = require('body-parser');



const mysql = require('mysql')
const app = express();


const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Ishaan@123",
    database: "stackfusion",


})


app.listen(3001, () => {
    console.log("running on port 3001");
})



// insertion of the new user details
app.post('/api/insertUser', (req, res) => {

    const name = req.body.uname;
    const dob = req.body.udob;

    const email = req.body.uemail;
    const phone = req.body.uphone;

    //hold the combination value of email and phone

    const un = email + phone;





    const query = "INSERT INTO `stackfusion`.`userDetails` (`name`, `dob`, `email`,`phone`,`uniqueId`) VALUES (?, ?,?,?,?)";





    console.log("hello hello " + JSON.stringify(req.body));






    db.query(query, [name, dob, email, phone, un], (err, result) => {

        if (err)
            res.send(
                {
                    status: "fail",
                    message: "Duplicate values are not allowed "
                })
        else
            res.send(
                {
                    status: "success",
                    message: "inserted successfully"
                });
    });


})

// this is not fine 
// getting all user details \

app.get('/api/GetUser', (req, res) => {
    const query = "select name, DATE_FORMAT(dob, '%d-%m-%Y') as dob, email, phone from userDetails ";

    db.query(query, (err, result) => {
        if (err)
            console.log(err);
        else {
            console.log("hod requesting is working")
            res.send(result);
        }

    })

})