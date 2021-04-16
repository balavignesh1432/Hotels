import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Favourite from './pages/Favourite';
import Landing from './pages/Landing';

import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h4" style={{flex:"1"}}>Hotels</Typography>
                <Link to="/register" style={{textDecoration:"none"}}><Button style={{color:"white"}}>Register</Button></Link>
                <Link to="/login" style={{textDecoration:"none"}}><Button style={{color:"white"}}>Login</Button></Link>
              </Toolbar>
            </AppBar>
            <Landing />
            </Route>
            <Route path="/register">
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h4" style={{flex:"1"}}>Hotels</Typography>
                <Link to="/login" style={{textDecoration:"none"}}><Button style={{color:"white"}}>Login</Button></Link>
                <Link to="/" style={{textDecoration:"none"}}><Button style={{color:"white"}}>Home</Button></Link>
              </Toolbar>
            </AppBar>
              <Register />  
            </Route>
            <Route path="/login">
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h4" style={{flex:"1"}}>Hotels</Typography>
                <Link to="/register" style={{textDecoration:"none"}}><Button style={{color:"white"}}>Register</Button></Link>
                <Link to="/" style={{textDecoration:"none"}}><Button style={{color:"white"}}>Home</Button></Link>
              </Toolbar>
            </AppBar>
              <Login />  
            </Route>
            <Route path="/hotels">
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h4" style={{flex:"1"}}>Hotels</Typography>
                <Link to="/favourite" style={{textDecoration:"none"}}><Button style={{color:"white"}}>Favourites</Button></Link>
                <Link to="/" style={{textDecoration:"none"}}><Button style={{color:"white"}}>Logout</Button></Link>
              </Toolbar>
            </AppBar>
              <Home />  
            </Route>
            <Route path="/favourite">
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h4" style={{flex:"1"}}>Hotels</Typography>
                <Link to="/hotels" style={{textDecoration:"none"}}><Button style={{color:"white"}}>Hotels</Button></Link>
                <Link to="/" style={{textDecoration:"none"}}><Button style={{color:"white"}}>Logout</Button></Link>
              </Toolbar>
            </AppBar>
              <Favourite />  
            </Route>
          </Switch>
        </Router>
        <Typography variant="body2" color="textSecondary" style={{textAlign:"center",marginTop:"20px"}}>© Copyright Bala Vignesh & Surya Prasath</Typography>  
      </div>
  );
}

export default App;
