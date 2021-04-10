const sort = (state='none',action)=>{
    switch(action.type){
        case "SET_SORT": return action.payload;
        default: return state;
    }
}
export {sort};