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
</ol>

<li> Install the following dependencies using the command npm install: </li>
  mysql
  body-parser
  cors
  </list>



### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# stack-fusion-webapp-assignment
