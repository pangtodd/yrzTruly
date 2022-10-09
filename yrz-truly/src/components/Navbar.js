import React, { useState, useContext } from "react";
import { auth } from "../firebase";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Firebase/context.js";
import {  signOut } from "firebase/auth";
import PropTypes from "prop-types";

function Navbar(props){
  const { user } = useContext(AuthContext);
  const location = useLocation()
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

  return(
    <React.Fragment>
      {user && <p>currently signed in as {user.displayName}</p>}
      { user==null && <p>{signOutSuccess}</p>}
      { user == null && 
        <Link to= "/sign-in"> 
          <button type="button"> Sign In </button>
        </Link>}
      {user && <button onClick={doSignOut}>sign out</button>}
      {user && location.pathname == "/sign-in"?(
        <Link to= "/add-greeting"> 
        {/* Just wanted to remove the button for now. Figure out more elegent way later. */}
        </Link>
      ) : (
        <button onClick={props.onClickAddGreeting}>Add greeting</button>
      )}
        {/* conditional needed since rendered in both GreetingControl and SignUp */}
      { location.pathname == "/sign-in"? (
          <Link to= "/"> 
            <button type="button"> home </button>
          </Link>
          ) : (          
            <button onClick={ props.onClickHome }> home </button>
          )
      }
    </React.Fragment>
  )
}

Navbar.propTypes={
  onClickHome: PropTypes.func,
  onClickAddGreeting: PropTypes.func,
}
export default Navbar