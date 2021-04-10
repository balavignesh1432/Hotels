import React, { useEffect, useState } from 'react';
import { FormControl,FormLabel,FormGroup,FormControlLabel,Checkbox,useTheme,useMediaQuery} from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { setStars } from "../redux/actions/index";

function StarFilter(){
    const theme=useTheme();
    const isMobile= useMediaQuery(theme.breakpoints.down("sm"));
    const stars = useSelector((state)=>state.stars);
    const dispatch = useDispatch(); 

    const [one,setOne] = useState(stars.one);
    const [two,setTwo] = useState(stars.two);
    const [three,setThree] = useState(stars.three);
    const [four,setFour] = useState(stars.four);
    const [five,setFive] = useState(stars.five);

    // function handleChange(){
    // }
    useEffect(()=>{
        dispatch(setStars({one,two,three,four,five}));
    },[dispatch,one,two,three,four,five]);

    return(
    <FormControl component="fieldset" style={!isMobile?{margin:"0 0 0 30px"}:{}}>
    <FormLabel component="legend" style={{marginBottom:"10px"}} >Star Rating</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={one} onChange={(event)=>setOne(event.target.checked)} />}
            label="1 Star"
          />
          <FormControlLabel
            control={<Checkbox checked={two} onChange={(event)=>setTwo(event.target.checked)}  />}
            label="2 Star"
          />
          <FormControlLabel
            control={<Checkbox checked={three} onChange={(event)=>setThree(event.target.checked)}  />}
            label="3 Star"
          />
          <FormControlLabel
            control={<Checkbox checked={four} onChange={(event)=>setFour(event.target.checked)}  />}
            label="4 Star"
          />
          <FormControlLabel
            control={<Checkbox checked={five} onChange={(event)=>setFive(event.target.checked)}  />}
            label="5 Star"
          />
        </FormGroup>
    </FormControl>);
}

export default StarFilter;