import axios from 'axios';
const url='http://localhost:5000';

const setFacilties = (facilities) => async (dispatch) =>{
    // console.log(facilities);
    dispatch({type:"SET_FACILITY",payload:facilities});
}

const setStars = (stars) => async (dispatch) =>{
    // console.log(facilities);
    dispatch({type:"SET_STAR",payload:stars});
}

const setRooms = (rooms) => async (dispatch) =>{
    // console.log(facilities);
    dispatch({type:"SET_ROOM",payload:rooms});
}

const setBudget = (budget) => async (dispatch) =>{
    // console.log(facilities);
    dispatch({type:"SET_BUDGET",payload:budget});
}

const applyFilter = (filters) => async (dispatch) =>{
    try{
        const {data} = await axios.get(url+"/filters",filters);
        console.log(data);
    }catch(err){
        console.log(err.message);
    }
}

export {setFacilties,setStars,setRooms,setBudget,applyFilter};