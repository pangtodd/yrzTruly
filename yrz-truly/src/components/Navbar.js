import React, { useState, useContext } from "react";
import { auth } from "../firebase";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Firebase/context.js";
import {  signOut } from "firebase/auth";
import PropTypes from "prop-types";
// new stuff
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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

    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style = {{ background: '#53868b'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2}}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user && <p>currently signed in as {user.displayName}</p>}
            { user==null && <p>{signOutSuccess}</p>}
        </Typography>

    {/* sign in button */}
        { user == null ?(
        <>
          <Link to= "/sign-in"> 
            <Button color="inherit">sign in</Button>
          </Link>
          { location.pathname == "/sign-in"? (
            <Link to= "/"> 
              <Button color="inherit"> home </Button>
            </Link>
            ) : (          
              <Button color="inherit" onClick={ props.onClickHome }> home </Button>
            )
          }
        </>
        ):(
        <>
          <Button color="inherit" onClick={doSignOut}>sign out</Button>
          {location.pathname != "/sign-in" &&
          <Button color="inherit" onClick={props.onClickAddGreeting}>Add greeting</Button>
          }
          { location.pathname == "/sign-in"? (
            <Link to= "/"> 
              <Button color="inherit"> home </Button>
            </Link>
            ) : (          
              <Button color="inherit" onClick={ props.onClickHome }> home </Button>
            )
          }
        </>
        )}
  
        

      </Toolbar>
    </AppBar>
  </Box>
    // <React.Fragment>
    //   {user && <p>currently signed in as {user.displayName}</p>}
    //   { user==null && <p>{signOutSuccess}</p>}
      // { user == null && 
      //   <Link to= "/sign-in"> 
      //     <Button variant="contained">sign in</Button>
      //   </Link>}
      // {user && <Button variant="contained" onClick={doSignOut}>sign out</Button>}
      // {user && location.pathname == "/sign-in"?(
      //   <Link to= "/add-greeting"> 
      //   {/* Just wanted to remove the button for now. Figure out more elegent way later. */}
      //   </Link>
      // ) : (
      //   <button onClick={props.onClickAddGreeting}>Add greeting</button>
      // )}
      //   {/* conditional needed since rendered in both GreetingControl and SignUp */}
      // { location.pathname == "/sign-in"? (
      //     <Link to= "/"> 
      //       <button type="button"> home </button>
      //     </Link>
      //     ) : (          
      //       <button onClick={ props.onClickHome }> home </button>
      //     )
      // }
    // </React.Fragment>
  )
}

Navbar.propTypes={
  onClickHome: PropTypes.func,
  onClickAddGreeting: PropTypes.func,
}
export default Navbar