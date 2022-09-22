import React, { useState } from "react";
import { auth } from './../firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


function SignIn(){

  const [signUpSuccess, setSignUpSuccess]= useState(null);
  const [signInSuccess, setSignInSuccess]= useState(null);

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

  function doSignIn(event){
    event.preventDefault();
    const email = event.target.email.value;
    cont password= event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}.`)
      })
      .catch((error)=>{
        setSignInSuccess(`uh-oh. There was an error signing in: ${error.message}.`)
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
      <h1>sign in</h1>
      {signInSuccess}
      <form onSubmit={doSignIn}>
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
        <button type = "submit">Sign in</button>
      </form>


    </React.Fragment>
  );
}

export default SignIn