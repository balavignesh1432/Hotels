const budget = (state=[500, 10000],action) =>{
    switch(action.type){
        case "SET_BUDGET" : return action.payload;
        default: return state;
    }
}

export {budget};