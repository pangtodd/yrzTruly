import React, { useContext } from "react";
import { auth } from "../firebase";
import { Link, button } from "react-router-dom";
import { AuthContext } from "../Firebase/context.js";


function Navbar(){
  const { user } = useContext(AuthContext);
    return(
      <React.Fragment>
        {user && <p>currently signed in as {user.displayName}</p>}
        {user == null && 
          <Link to= "/sign-in"> 
            <button type="button"> Sign In </button>
          </Link>}
        {user && 
          <Link to= "/sign-in"> 
          <button type="button"> Sign out </button>
        </Link>}
        <Link to= "/"> 
            <button type="button"> home</button>
        </Link>
      </React.Fragment>
    )

}
export default Navbar