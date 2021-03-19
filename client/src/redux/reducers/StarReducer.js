const stars = (state={one:false,two:false,three:false,four:false,five:false},action) =>{
    switch(action.type){
        case "SET_STAR" : return action.payload;
        default: return state;
    }
}

export {stars};