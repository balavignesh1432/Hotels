import data from '../../Data';

const favourites = (state=data,action) =>{
    switch(action.type){
        case "SET_FAVOURITE" : return action.payload;
        default: return state;
    }   
}

export {favourites};