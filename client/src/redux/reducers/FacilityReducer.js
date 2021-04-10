const facilities = (state={WiFi:false,ac:false,pool:false,laundry:false,parking:false},action) =>{
    switch(action.type){
        case "SET_FACILITY" : return action.payload;
        default: return state;
    }
}

export {facilities};