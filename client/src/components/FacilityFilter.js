import React, { useEffect, useState } from 'react';
import { FormControl,FormLabel,FormGroup,FormControlLabel,Checkbox} from "@material-ui/core";
function FacilityFilter(){
    const [laundry,setLaundry] = useState(false);
    const [wifi,setWifi] = useState(false);
    const [ac,setAc] = useState(false);
    
    useEffect(()=>{
    //     console.log(laundry);
    //     console.log(wifi);
    //     console.log(parking);
    });
    
    return(
    <FormControl>
    <FormLabel >Facilities</FormLabel>
        <FormGroup style={{margin:"10 10 0 0"}}>
          <FormControlLabel
            control={<Checkbox checked={laundry} onChange={(event)=>setLaundry(event.target.checked)} />}
            label="Laundry"
          />
          <FormControlLabel
            control={<Checkbox checked={wifi} onChange={(event)=>setWifi(event.target.checked)}  />}
            label="Wifi"
          />
          <FormControlLabel
            control={<Checkbox checked={ac} onChange={(event)=>setAc(event.target.checked)}  />}
            label="Air Cooler"
          />
        </FormGroup>
    </FormControl>);
}

export default FacilityFilter;