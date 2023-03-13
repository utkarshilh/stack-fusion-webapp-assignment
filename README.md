# Company Placement Assignment

This project is a placement assignment for stackfusion. 

## Demo Video

[Click Here ](https://drive.google.com/file/d/10XIzVe6fAkVBvhN7OZL80XkVHJZV171G/view?usp=share_link)

## Description

This is a simple React application that allows users to submit a form with their personal information (name, date of birth, email, and phone number) and stores the data in a database. The application also includes a page that displays all the submitted forms in the form of cards..

## Installation
<ol type="1" >

 <li> Open the main page folder of the React project in a terminal.</li>
<li> Run the command npm i to install all the required dependencies for the project.</li>
<li> Navigate to the backend folder inside the main page folder in the terminal.</li>
<li>Run the command npm init and keep pressing the Enter key to use the default values for the prompts.</li>
<li> Open the index.js file inside the backend folder.</li>
<li> Replace the username and password with your own database user ID and password.</li>
<li> Create a database named stackfusion in your MySQL server.</li>
<li>Create a table named userDetails in the stackfusion database with the following schema:</li>
   <list>
   <li>
    CREATE TABLE `userDetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `uniqueId` varchar(275) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniqueId_UNIQUE` (`uniqueId`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
</li>
</ul>

<li> Install the following dependencies using the command npm install: </li>
 <ul>
  <li>mysql</li>
   <li>body-parser</li>
   <li>cors</li>
 </ul>
  </ol>


## Contact
# eamil 
utkarsh.ilh@gmail.com
