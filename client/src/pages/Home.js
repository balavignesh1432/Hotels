import React,{useEffect, useState} from 'react';
import Results from '../components/Results';
import FilterListIcon from '@material-ui/icons/FilterList';
import SortIcon from '@material-ui/icons/Sort';
import Filters from '../components/Filters';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography,useTheme,useMediaQuery } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
 import {setCity,applyFilter} from '../redux/actions/index';
import Sort from '../components/Sort';

function Home(){
    const theme=useTheme();
    const isMobile= useMediaQuery(theme.breakpoints.down("sm"));

    const [filterOpen,setFilterOpen]=useState(false);
    const [SortOpen,setSortOpen]=useState(false);

    const city = useSelector((state)=>state.city);
    const budget = useSelector((state)=>state.budget);
    const facilities = useSelector((state)=>state.facilities);
    const stars = useSelector((state)=>state.stars);
    const rooms = useSelector((state)=>state.rooms);
    const sort = useSelector((state)=>state.sort);

    const [search,setSearch]=useState(city);
    
    const dispatch = useDispatch();

    function handleSearch(){
        setFilterOpen(false);
        setSortOpen(false);
        //console.log({facilities,stars,rooms,budget,city,sort});
        dispatch(applyFilter({city,facilities,stars,rooms,budget,sort}));
    }

    useEffect(()=>{
        dispatch(setCity(search));
    },[dispatch,search]);
    
    return (
        <div className="Home">
            <div className="topSection" style={!isMobile?{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",margin:"50px 50px 0 50px"}:{display:"flex",flexDirection:"column",alignItems:"center"}} >
            <div style={{marginTop:"30px"}}>
            <Typography variant={!isMobile?"h3":"h5"}>Where you want to stay?</Typography>   
            </div>
            <div className="searchSection" style={!isMobile?{display:"flex"}:{width:"100%",display:"flex",alignItems:"center",marginTop:"20px",justifyContent:"space-around"}}>
            <TextField onChange={(event)=>setSearch(event.target.value)} value={search} label="City" variant="filled" style={!isMobile?{width:"500px"}:{width:"70%"}}/>
            <Button color="secondary" variant="contained" style={{marginLeft:"10px"}} size={!isMobile?"large":"small"} onClick={handleSearch}>Search</Button>
            </div>
            </div>
            <div className="filterSection" style={!isMobile?{width:"95%",margin:"auto",marginTop:"20px",display:"flex",justifyContent:"space-between"}:{width:"95%",margin:"auto",marginTop:"20px",display:"flex",justifyContent:"space-between"}}>
            <Button color="primary" onClick={()=>setSortOpen(true)} size="large" style={!isMobile?{fontSize:"1.2rem"}:{width:"50%"}}><SortIcon />Sort</Button>
            <Button color="primary" onClick={()=>setFilterOpen(true)} size="large" style={!isMobile?{fontSize:"1.2rem"}:{width:"50%"}}><FilterListIcon />Filter</Button>
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
            <Dialog open={SortOpen} onClose={()=>setSortOpen(false)}>
                <DialogTitle>
                    Sort
                </DialogTitle>
                <DialogContent>
                    <Sort />
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
