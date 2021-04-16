import React from "react";
import { Button,Typography,useMediaQuery,useTheme } from "@material-ui/core";
import { useHistory } from "react-router";
function Landing(){
    const theme=useTheme();
    const isMobile= useMediaQuery(theme.breakpoints.down("xs"));
    const history=useHistory();
    return(
        <div style={!isMobile?{display:"flex",width:"100%"}:{display:"flex",flexDirection:"column"}}>
        <div style={!isMobile?{width:"50%"}:{width:"100%"}}>
            <img src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="hotel" style={{maxWidth:"100%"}}/>
        </div>
        <div style={!isMobile?{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"auto",width:"40%"}:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"auto",width:"95%"}}>
            <Typography variant="h4" style={!isMobile?{textAlign:"center"}:{marginTop:"10px",textAlign:"center"}}>All your room bookings at one place. Get the best deals for your rooms now!</Typography>
            <div style={{display:"flex",width:"250px",justifyContent:"space-around",marginTop:"20px"}}>
            <Button variant="outlined" color="secondary" size="large" onClick={()=>history.push("/register")}>Sign Up</Button>
            <Button variant="contained" color="secondary" size="large" onClick={()=>history.push("/login")}>Sign In</Button>
            </div>
        </div>
        </div>
    )
}

export default Landing;