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

const register = (details) => async (dispatch) =>{
    try{
        console.log(details);
        const {data}=await axios.post(url+"/user/register",details);
        console.log(data);
        if(data.status===1){
            dispatch({type:"SET_REGISTER"});
        }else if(data.status===2){
            alert("Enter valid Email Address!");
        }else{
            alert("User already exists!");
        }
    }catch(err){
        console.log(err.message);
    }
}

const login = (details) => async (dispatch) =>{
    try{
        console.log(details);
        const {data}= await axios.post(url+"/user/login",details);
        console.log(data);
        if(data.status===1){
            dispatch({type:"SET_LOGIN"});
            dispatch({type:"SET_CURRENT",payload:details.username});
        }else{
            alert("Invalid Username or password!");
        }
    }catch(err){
        console.log(err.message);
    }
}


const getFavourite = (username) => async (dispatch) =>{
    try{
        console.log(username);
        const {data} = await axios.post(url+'/favourite/get',{username});
        dispatch({type:"SET_FAVOURITE",payload:data});
    }catch(err){
        console.log(err.message);
    }
}

const postFavourite = (item) => async (dispatch) =>{
    try{
        console.log(item);
        const {data} = await axios.post(url+'/favourite/post',item);
        if(data.status === 1){
            dispatch(getFavourite(item.username));
        }
    }catch(err){

    }
}

const deleteFavourite = (item) => async (dispatch) =>{
    try{
        console.log(item);
        const {data} = await axios.post(url+'/favourite/delete',item);
        if(data.status === 1){
            dispatch(getFavourite(item.username));
        }
    }catch(err){

    }
}
export {setCity,setFacilties,setStars,setRooms,setBudget,applyFilter,register,login,postFavourite,getFavourite,deleteFavourite};