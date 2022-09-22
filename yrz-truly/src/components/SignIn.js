import React, { useState } from "react";
import { auth } from './../firebase.js';
import { createUserWithEmailAndPassword } from "firebase/auth";


function SignIn(){

  const [signUpSuccess, setSignUpSuccess]= useState(null);

  function doSignUp(event){
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}.`)
      })
      .catch((error)=>{
        setSignUpSuccess(`There was a problem signing up: ${error.message}. :(`)
      });
  }

  return(
    <React.Fragment>
      <h1>Sign up</h1>
      {signUpSuccess}
      <form onSubmit={doSignUp}>
        <input
          type="text"
          name="email"
          placeholder="email" />
          <br/>
          <br/>
        <input
          type="password"
          name="password"
          placeholder="password" />
           <br/>
          <br/>
        <button type = "submit">Sign up</button>
      </form>
    </React.Fragment>
  );
}

export default SignIn