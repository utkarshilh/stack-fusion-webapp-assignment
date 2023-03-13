import logo from './logo.svg';
import './App.css';
import Form from './Component/form';
import React, { useState } from 'react';
import List from './Component/list';



function App() {

  const [formState, setFormState] = useState(true);


  const changeComponent = () => {
    setFormState(false);

  }

  // return ((formState) ? (<A changeStatus={changeComponent} />) : (<B />))

  return ((formState) ? (<Form changeComponent={changeComponent} />) : (<List />));

}

export default App;
