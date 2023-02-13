// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'
import Alert from './Components/Alert';
// import About from './Components/About';
import Textutilite from './Components/Textutilites'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
 
// } from "react-router-dom";

function App(props) {
  // const [mode, setmode] = useState("");
  const [color, setcolor] = useState("");
  const [alert, setalert] = useState("");

  let colorChange = (e) => {
    setcolor(e);
  };
  const showAlerts = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert("")
    }, 2000)
  }

  return (
    <>
      {/* <Router> */}

        <div style={{ backgroundColor: color, color: 'black', WebkitTextStroke: "0.2px", WebkitTextStrokeColor: "white" }}>
          <Navbar title={"TEXTUTILES"} colorHandel={colorChange} />
          <Alert ShowAlert={alert} />
          <div className="container my-3">
            {/* <Switch> */}
              {/* <Route path='/Home'> */}
              {/* <Textutilite/>  */}
              {/* </Route> */}
              {/* <Route path="/Function"> */}
                <Textform heading={"Enter The Text To Analayze"}  ShowAlert={showAlerts} />
              {/* </Route> */}
              {/* <Route path="/about"> */}
                {/* <About/> */}
              {/* </Route> */}
            {/* </Switch> */}
          </div>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
