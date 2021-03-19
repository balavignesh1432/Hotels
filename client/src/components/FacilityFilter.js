import React, { useEffect, useState } from 'react';
import { FormControl,FormLabel,FormGroup,FormControlLabel,Checkbox} from "@material-ui/core";
import { useSelector,useDispatch } from "react-redux";
import { setFacilties } from "../redux/actions/index";
function FacilityFilter(){
    
    const facilities = useSelector((state)=>state.facilities);
    const dispatch = useDispatch();
    const [wifi,setWifi] = useState(facilities.wifi);
    const [ac,setAc] = useState(facilities.ac);
    const [pool,setPool] = useState(facilities.pool);
    const [laundry,setLaundry] = useState(facilities.laundry);
    const [parking,setDry] = useState(facilities.parking); 
    
    useEffect(()=>{
        dispatch(setFacilties({wifi,ac,pool,laundry,parking}))
    },[dispatch,wifi,ac,pool,laundry,parking]);
    
    return(
    <FormControl>
    <FormLabel style={{marginBottom:"10px"}}>Facilities</FormLabel>
        <FormGroup style={{margin:"10 10 0 0"}}>
          <FormControlLabel
            control={<Checkbox checked={wifi} onChange={(event)=>{setWifi(event.target.checked); }}  />}
            label="Wifi"
          />
          <FormControlLabel
            control={<Checkbox checked={ac} onChange={(event)=>{setAc(event.target.checked); }}  />}
            label="AC"
          />
          <FormControlLabel
            control={<Checkbox checked={pool} onChange={(event)=>{setPool(event.target.checked); }}  />}
            label="Pool"
          />
          <FormControlLabel
            control={<Checkbox checked={laundry} onChange={(event)=>{setLaundry(event.target.checked); }} />}
            label="Laundry"
          />
          <FormControlLabel
            control={<Checkbox checked={parking} onChange={(event)=>{setDry(event.target.checked); }} />}
            label="Parking"
          />
        </FormGroup>
    </FormControl>);
}

export default FacilityFilter;