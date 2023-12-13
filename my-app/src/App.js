import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert';


// Other imports and components...

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Nishita - Software Engineer!';
      setInterval(() => {
        document.title = 'Nishita - Software Engineer!';
      }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Nishita - Profile!';
      setInterval(() => {
        document.title = 'Nishita - Profile!';
      }, 1500);
    }
  }
  
  return (
    <>
       <Router> 
         <Navbar title="Nishita" mode={Mode} toggleMode={toggleMode} key={new Date()} />
         <Alert alert={alert}/>
         <div className="container my-3">
           <Routes>
             <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>}/>
             <Route exact path="/about" element={<About mode={Mode} />} />
         </Routes>
         </div>
       </Router>
    </>
  );
}

export default App;
