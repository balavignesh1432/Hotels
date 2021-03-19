const rooms = (state={standard:false,deluxe:false,executive:false,luxury:false},action) =>{
    switch(action.type){
        case "SET_ROOM" : return action.payload;
        default: return state;
    }
}

export {rooms};