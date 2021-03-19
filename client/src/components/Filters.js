import React,{useState,useEffect} from 'react';
import {Typography,Slider} from '@material-ui/core'
import FacilityFilter from "../components/FacilityFilter";
import StarFilter from "../components/StarFilter"
import RoomFilter from "../components/RoomFilter";

import { useDispatch, useSelector } from 'react-redux';
import {setBudget} from '../redux/actions/index';

function Filters(){
    const budget = useSelector((state)=>state.budget);
    const [price, setPrice] = useState(budget);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(setBudget(price));
    },[dispatch,price]);
    
    return (
        <div className="Filters">    
            <Typography variant="body1">Budget ( ₹ )</Typography>
            <Slider value={price} onChange={(event,newValue)=>setPrice(newValue)} min={500} max={5000} step={200} valueLabelDisplay="auto" style={{margin:"20px 0 20px 0"}}/>
            <FacilityFilter />
            <StarFilter />
            <RoomFilter />
        </div>
    );
}
export default Filters;