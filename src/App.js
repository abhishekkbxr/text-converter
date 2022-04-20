import "./App.css";
import Navbar from "./component.js/Navbar";
import TextForm from "./component.js/TextForm";
import Alert from "./component.js/Alert";
import React ,{useState} from 'react'
import AboutMe from "./component.js/AboutMe";


import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

function App() {
  const[alert , setAlert] =useState(null)

  const showAlert =(message , type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);

  }
  
  const [mode, setMode] = useState("light")
  const modeControl=()=>{
    if(mode === 'dark'){
      setMode("light")
      document.body.style.backgroundColor ='white';
      showAlert(" Light mode is enabled ", "success")
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor ='#042743';
      showAlert(" Dark mode is enabled ", "success")
    }

  }

  return (
    <>
    <Router>
      <Navbar title="navtitle" home="Home" About="About" mode={mode} toggleMode={modeControl}/>
      <Alert Alert = {alert} />

      <div>
      <Switch>
          <Route exact path="/AboutMe">
            <AboutMe />
          </Route>
         
          <Route path="/">
          <TextForm heading=" Text converter:- " mode={mode}  showAlert={showAlert}/>
          </Route>
        </Switch> 
  
      </div>
      </Router>
      
      
    </>
  );
}

export default App;

