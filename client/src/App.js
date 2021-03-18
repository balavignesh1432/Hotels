import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
        <div className="App">
          <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" style={{flex:"1"}}>Hotels</Typography>
          </Toolbar>
          </AppBar>
          <Home />  
        </div>  
  );
}

export default App;
