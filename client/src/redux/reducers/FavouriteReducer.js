const favourites = (state=[],action) =>{
    switch(action.type){
        case "SET_FAVOURITE" : return action.payload;
        default: return state;
    }   
}

export {favourites};