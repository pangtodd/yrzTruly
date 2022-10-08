import React, { useState, useContext} from "react";
import { auth } from './../firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, getAuth } from "firebase/auth";
// newBelow
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AuthContext } from "../Firebase/context";

function SignIn(){
  const { user } = useContext(AuthContext);
  const [signUpSuccess, setSignUpSuccess]= useState(null);
  const [signInSuccess, setSignInSuccess]= useState(null);
  const [signOutSuccess, setSignOutSuccess]= useState(null);

  function doSignUp(event){
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const displayerName = event.target.displayName.value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        updateProfile(userCredential.user,{
          displayName: displayerName
        }).then(()=>{
          setSignUpSuccess(`You successfully signed up, ${userCredential.user.displayName}`)
        })
        .catch((error)=>{
          setSignUpSuccess(`There was a problem signing up:  ${error.message}. :(`)
        });
      })
      .catch((error)=>{
        setSignUpSuccess(`There was a problem signing up: ${error.message}. :(`)
      });
    
    
    
  }

  function doSignIn(event){
    event.preventDefault();
    const email = event.target.email.value;
    const password= event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}.`)
      })
      .catch((error)=>{
        setSignInSuccess(`uh-oh. There was an error signing in: ${error.message}.`)
      });
  }

  // function doSignOut(event){
  //   signOut(auth)
  //     .then(function() {
  //       setSignOutSuccess("you have successfully signed out.");
  //     })
  //     .catch(function(error){
  //       setSignOutSuccess(`There was an error signing out: ${error.message}`);
  //     });
  // }
  

  return(
    <React.Fragment>
      <h1>Returning user sign in</h1>
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
      <p>Wait, wait, wait! You don't have an account yet?</p>
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
          type="displayName"
          name="displayName"
          placeholder="display name" />
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
        {/* <h1>Sign Out</h1>
        {signOutSuccess}
        <br />
        <button onClick={doSignOut}>sign out</button> */}
    </React.Fragment>
  );
}

export default SignIn