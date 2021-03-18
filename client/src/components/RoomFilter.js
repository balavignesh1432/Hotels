import React, { useEffect, useState } from 'react';
import { FormControl,FormLabel,FormGroup,FormControlLabel,Checkbox} from "@material-ui/core";
function RoomFilter(){
    const [standard,setStandard] = useState(false);
    const [deluxe,setDeluxe] = useState(false);
    const [executive,setExecutive] = useState(false);
    const [luxury,setLuxury] = useState(false);
    
    useEffect(()=>{
    //     console.log(laundry);
    //     console.log(wifi);
    //     console.log(parking);
    });
    
    return(
    <FormControl style={{margin:"0 0 0 30px"}}>
    <FormLabel style={{marginBottom:"10px"}}>Room Type</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={standard} onChange={(event)=>setStandard(event.target.checked)} />}
            label="Standard"
          />
          <FormControlLabel
            control={<Checkbox checked={deluxe} onChange={(event)=>setDeluxe(event.target.checked)}  />}
            label="Deluxe"
          />
          <FormControlLabel
            control={<Checkbox checked={executive} onChange={(event)=>setExecutive(event.target.checked)}  />}
            label="Executive"
          />
          <FormControlLabel
            control={<Checkbox checked={luxury} onChange={(event)=>setLuxury(event.target.checked)}  />}
            label="Luxury"
          />
        </FormGroup>
    </FormControl>);
}

export default RoomFilter;