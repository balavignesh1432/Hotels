const current = (state='',action) =>{
    switch(action.type){
        case "SET_CURRENT": return action.payload;
        default: return state;
    }
}

export {current};