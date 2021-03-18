import React, { useEffect, useState } from 'react';
import { FormControl,FormLabel,FormGroup,FormControlLabel,Checkbox} from "@material-ui/core";

function StarFilter(){
    const [one,setOne] = useState(false);
    const [two,setTwo] = useState(false);
    const [three,setThree] = useState(false);
    const [four,setFour] = useState(false);
    const [five,setFive] = useState(false);

    // function handleChange(){
    // }
    useEffect(()=>{
        // console.log(laundry);
        // console.log(wifi);
        // console.log(parking);
    });
    return(
    <FormControl component="fieldset" style={{margin:"0 0 0 30px"}}>
    <FormLabel component="legend">Star Rating</FormLabel>
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