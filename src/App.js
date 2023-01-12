
import './App.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React,{useState} from 'react';
import Alert from './Component/Alert';
import { useTransition } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({ 
        msg:message,
       type: type
      })
      setTimeout (() =>{
      setAlert(null); },
      1500)
  }

 const toggleMode = () =>{
     if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor='gray';
       showAlert("Dark mode has been enabled.","Success");
     }
     else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','Success');
    }
  } 
   return (
    < >
    <Navbar Title="Textutils" homeTitle="Home" aboutTitle="About" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
   <div className="container my-3">
    <TextForm Heading="Enter the text to analyze"  mode={mode} showAlert={showAlert}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;



