import React, { useEffect, useState } from 'react';
import { FormControl,FormLabel,FormGroup,FormControlLabel,Checkbox} from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import {setRooms} from '../redux/actions/index'

function RoomFilter(){
    const rooms = useSelector((state)=>state.rooms);
    const dispatch = useDispatch();

    const [standard,setStandard] = useState(rooms.standard);
    const [deluxe,setDeluxe] = useState(rooms.deluxe);
    const [executive,setExecutive] = useState(rooms.executive);
    const [luxury,setLuxury] = useState(rooms.luxury);
    
    useEffect(()=>{
        dispatch(setRooms({standard,deluxe,executive,luxury}))
    },[dispatch,standard,deluxe,executive,luxury]);
    
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