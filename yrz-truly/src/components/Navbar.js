import React, { useState, useContext } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/context.js";
import {  signOut } from "firebase/auth";

function Navbar(){

  const [signOutSuccess, setSignOutSuccess]= useState(null);

  function doSignOut(event){
    signOut(auth)
      .then(function() {
        setSignOutSuccess("Signed out.");
      })
      .catch(function(error){
        setSignOutSuccess(`There was an error signing out: ${error.message}`);
      });
  }
  
  const { user } = useContext(AuthContext);
    return(
      <React.Fragment>
        {user && <p>currently signed in as {user.displayName}</p>}
        {user == null && 
          <Link to= "/sign-in"> 
            <button type="button"> Sign In </button>
          </Link>}
        {user && 
          <button onClick={doSignOut}>sign out</button>}
        <Link to= "/"> 
            <button type="button"> home</button>
        </Link>
      </React.Fragment>
    )

}
export default Navbar