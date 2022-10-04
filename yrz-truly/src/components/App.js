import React from "react";
import SignIn from "./SignIn";
import Header from "./Header";
import LandingPage from "./LandingPage";
import GreetingControl from "./GreetingControl";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(){
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<LandingPage />}/>
        <Route path="/list" element ={<GreetingControl />}/>
      </Routes>      
    </Router>
  );
}

export default App;