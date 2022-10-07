import React, { useContext } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/context.js";

function Navbar(){
  const { user } = useContext(AuthContext);
  if (user == null){
    return(
      <React.Fragment>
      <Link to ="/sign-in"> Sign In </Link>
      <Link to= "/"> home </Link>
      </React.Fragment>
    )
    } else {
      return(
        <React.Fragment>
          <p>currently signed in as {user.displayName}</p>
          <Link to= "/sign-in">Sign out</Link>
          <br></br>
          <Link to= "/"> home </Link>
        </React.Fragment>
      )
    }

}
export default Navbar