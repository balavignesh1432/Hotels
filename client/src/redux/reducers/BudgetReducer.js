const budget = (state=[1000, 3000],action) =>{
    switch(action.type){
        case "SET_BUDGET" : return action.payload;
        default: return state;
    }
}

export {budget};