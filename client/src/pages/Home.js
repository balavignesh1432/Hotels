import React,{useEffect, useState} from 'react';
import Results from '../components/Results';
import FilterListIcon from '@material-ui/icons/FilterList';
import Filters from '../components/Filters';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
 import {setCity,applyFilter} from '../redux/actions/index';

function Home(){
    const [filterOpen,setFilterOpen]=useState(false);

    const city = useSelector((state)=>state.city);
    const budget = useSelector((state)=>state.budget);
    const facilities = useSelector((state)=>state.facilities);
    const stars = useSelector((state)=>state.stars);
    const rooms = useSelector((state)=>state.rooms);

    const [search,setSearch]=useState(city);
    
    const dispatch = useDispatch();

    function handleSearch(){
        setFilterOpen(false);
        console.log({facilities,stars,rooms,budget,city});
        dispatch(applyFilter({city,facilities,stars,rooms,budget}));
    }

    useEffect(()=>{
        dispatch(setCity(search));
    },[dispatch,search]);
    
    return (
        <div className="Home">
            <div className="topSection" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",margin:"50px 50px 0 50px"}} >
            <Typography variant="h3">Where you want to stay?</Typography>   
            <div className="searchSection" style={{display:"flex"}}>
            <TextField onChange={(event)=>setSearch(event.target.value)} value={search} label="City" variant="filled" style={{width:"500px"}}/>
            <Button color="secondary" variant="contained" style={{marginLeft:"10px"}} size="large" onClick={handleSearch}>Search</Button>
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
                    <Button onClick={handleSearch} color="primary" variant="contained" size="large">Apply</Button>
                </DialogActions>    
            </Dialog>
            <Results />
        </div>
    );
}

export default Home;
