import React from "react";
import SignIn from "./SignIn";
import Header from "./Header";
import { AuthProvider } from "./../Firebase/context";
import GreetingControl from "./GreetingControl";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(){
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<GreetingControl />}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;