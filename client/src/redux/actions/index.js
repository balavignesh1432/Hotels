import axios from 'axios';
const url='http://localhost:5000';

const setCity = (city) => async (dispatch) =>{
    dispatch({type:"SET_CITY",payload:city});
}

const setBudget = (budget) => async (dispatch) =>{
    dispatch({type:"SET_BUDGET",payload:budget});
}
const setFacilties = (facilities) => async (dispatch) =>{
    dispatch({type:"SET_FACILITY",payload:facilities});
}

const setStars = (stars) => async (dispatch) =>{
    dispatch({type:"SET_STAR",payload:stars});
}

const setRooms = (rooms) => async (dispatch) =>{
    dispatch({type:"SET_ROOM",payload:rooms});
}

const applyFilter = (filters) => async (dispatch) =>{
    try{
        console.log(filters);
        const {data} = await axios.post(url+"/filters",filters);
        console.log(data);
    }catch(err){
        console.log(err.message);
    }
}

export {setCity,setFacilties,setStars,setRooms,setBudget,applyFilter};