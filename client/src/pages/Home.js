import React,{useState} from 'react';
import Results from '../components/Results';
import FilterListIcon from '@material-ui/icons/FilterList';
import FacilityFilter from "../components/FacilityFilter";
import StarFilter from "../components/StarFilter"
import RoomFilter from "../components/RoomFilter";

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slider, TextField, Typography } from '@material-ui/core';

function Home(){
    const [filterOpen,setFilterOpen]=useState(false);
    const [city,setCity]=useState('');
    const [price, setPrice] = React.useState([1000, 3000]);
    return (
        <div className="Home">
            <div className="topSection" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",margin:"50px 50px 0 50px"}} >
            <Typography variant="h3">Where you want to stay?</Typography>   
            <div className="searchSection" style={{display:"flex"}}>
            <TextField onChange={(event)=>setCity(event.target.value)} value={city} label="City" variant="filled" style={{width:"500px"}}/>
            <Button color="secondary" variant="contained" style={{marginLeft:"10px"}} size="large">Search</Button>
            </div>
            <div className="filterSection">
            <Button color="primary" onClick={()=>setFilterOpen(true)} size="large" ><FilterListIcon />Filter</Button>
            </div>
            </div>
            <Dialog open={filterOpen} onClose={()=>setFilterOpen(false)}>
                <DialogTitle>
                    Filters
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body1">Budget ( ₹ )</Typography>
                    <Slider value={price} onChange={(event,newValue)=>setPrice(newValue)} min={500} max={5000} step={100} valueLabelDisplay="auto" style={{margin:"20px 0 20px 0"}}/>
                    <FacilityFilter />
                    <StarFilter />
                    <RoomFilter />
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{setFilterOpen(false)}} color="primary" variant="contained" size="large">Apply</Button>
                </DialogActions>    
            </Dialog>
            <Results />
        </div>
    );
}

export default Home;
