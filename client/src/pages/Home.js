import React,{useEffect, useState} from 'react';
import Results from '../components/Results';
import FilterListIcon from '@material-ui/icons/FilterList';
import Filters from '../components/Filters';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
 import {applyFilter} from '../redux/actions/index';

function Home(){
    const [filterOpen,setFilterOpen]=useState(false);
    const [city,setCity]=useState('');
    
    const budget = useSelector((state)=>state.budget);
    const facilities = useSelector((state)=>state.facilities);
    const stars = useSelector((state)=>state.stars);
    const rooms = useSelector((state)=>state.rooms);

    const dispatch = useDispatch();
    
    function handleFilter(){
        setFilterOpen(false);
        console.log({facilities,stars,rooms,budget});
        dispatch(applyFilter({facilities,stars,rooms,budget}));
    }

    useEffect(()=>{

    },[]);
    
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
                    <Filters />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleFilter} color="primary" variant="contained" size="large">Apply</Button>
                </DialogActions>    
            </Dialog>
            <Results />
        </div>
    );
}

export default Home;
