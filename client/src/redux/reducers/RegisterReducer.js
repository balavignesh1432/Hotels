const register =(state=false,action) => {
    switch(action.type){
        case "SET_REGISTER" : return true;
        default : return state;
    }
}

export {register};