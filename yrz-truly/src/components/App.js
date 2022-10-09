import React from "react";
import SignIn from "./SignIn";
import Header from "./Header";
import { AuthProvider } from "./../Firebase/context";
import GreetingControl from "./GreetingControl";
import GreetingList from "./GreetingList";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NewGreetingForm from "./NewGreetingForm";

function App(){
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/" element={<GreetingControl />}/>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;