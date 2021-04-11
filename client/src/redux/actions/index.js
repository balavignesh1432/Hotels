import axios from 'axios';
const url='http://localhost:5000';

const setCity = (city) => (dispatch) =>{
    dispatch({type:"SET_CITY",payload:city});
}

const setBudget = (budget) => (dispatch) =>{
    dispatch({type:"SET_BUDGET",payload:budget});
}
const setFacilties = (facilities) => (dispatch) =>{
    dispatch({type:"SET_FACILITY",payload:facilities});
}

const setStars = (stars) => (dispatch) =>{
    dispatch({type:"SET_STAR",payload:stars});
}

const setRooms = (rooms) => (dispatch) =>{
    dispatch({type:"SET_ROOM",payload:rooms});
}

const applyFilter = (filters) => async (dispatch) =>{
    try{
        //console.log(filters);
        const {data} = await axios.post(url+"/filters",filters);
        console.log(data);
        dispatch({type:"SET_RESULT",payload:data});
    }catch(err){
        console.log(err.message);
    }
}

export {setCity,setFacilties,setStars,setRooms,setBudget,applyFilter};