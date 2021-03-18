import React, { useEffect, useState } from 'react';
import { FormControl,FormLabel,FormGroup,FormControlLabel,Checkbox} from "@material-ui/core";
function FacilityFilter(){
    
    const [wifi,setWifi] = useState(false);
    const [ac,setAc] = useState(false);
    const [pool,setPool] = useState(false);
    const [laundry,setLaundry] = useState(false);
    const [dry,setDry] = useState(false); 
    
    useEffect(()=>{
    //     console.log(laundry);
    //     console.log(wifi);
    //     console.log(parking);
    });
    
    return(
    <FormControl>
    <FormLabel style={{marginBottom:"10px"}}>Facilities</FormLabel>
        <FormGroup style={{margin:"10 10 0 0"}}>
          <FormControlLabel
            control={<Checkbox checked={wifi} onChange={(event)=>setWifi(event.target.checked)}  />}
            label="Wifi"
          />
          <FormControlLabel
            control={<Checkbox checked={ac} onChange={(event)=>setAc(event.target.checked)}  />}
            label="AC"
          />
          <FormControlLabel
            control={<Checkbox checked={pool} onChange={(event)=>setPool(event.target.checked)}  />}
            label="Pool"
          />
          <FormControlLabel
            control={<Checkbox checked={laundry} onChange={(event)=>setLaundry(event.target.checked)} />}
            label="Laundry"
          />
          <FormControlLabel
            control={<Checkbox checked={dry} onChange={(event)=>setDry(event.target.checked)} />}
            label="Dry Cleaning"
          />
        </FormGroup>
    </FormControl>);
}

export default FacilityFilter;