import React, { useEffect, useState } from "react";
import app from "./config";

export const AuthContext = React.createContext();

export const AuthProvider =({ children })=>{
  const [user, setUser] = userState(null);

  useEffect(()=>{
    app.auth().onAuthStateChanged(setUser);
  }, []);


return(
  <AuthContext.Provder value ={{user}}>{children}</AuthContext.Provder>
  );
};
