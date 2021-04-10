import { useState,useEffect } from "react";
import {Radio, Typography} from '@material-ui/core'
import { useDispatch, useSelector } from "react-redux";


function Sort(){
    const sort = useSelector(state=>state.sort);
    const dispatch = useDispatch();

    const [value,setValue] = useState(sort);
    
    const [asc,setAsc]= useState(value==='ascending'?true:false);
    const [desc,setDesc]= useState(value==='descending'?true:false);
    const [non,setNon]= useState(value==='none'?true:false);

    useEffect(()=>{
        dispatch({type:"SET_SORT",payload:value});
    },[dispatch,value]);
    
    function handleAsc(event){
        setNon(false);
        setDesc(false);
        setAsc(true);
        setValue(event.target.value);

    }
    
    function handleDesc(event){
        setNon(false);
        setAsc(false);
        setDesc(true);
        setValue(event.target.value);

    }
    
    function handleNon(event){
        setDesc(false);
        setAsc(false);
        setNon(true);
        setValue(event.target.value);
    }
    return(
        <div>
            <Typography variant="h6" >Price</Typography>
            <div style={{display:"flex",width:"200px",alignItems:"center"}}>
            <Radio 
                checked={asc}
                value="ascending"
                onChange={handleAsc}
            />
            <Typography>Low to High</Typography>
            </div>
            <div style={{display:"flex",width:"200px",alignItems:"center"}}>
            <Radio 
                checked={desc}
                value="descending"
                onChange={handleDesc}
            />
            <Typography>Low to High</Typography>
            </div>
            <div style={{display:"flex",width:"200px",alignItems:"center"}}>
            <Radio 
                checked={non}
                value="none"
                onChange={handleNon}
                label="None"
            />
            <Typography>None</Typography>
            </div>
        </div>
    );
}

export default Sort;