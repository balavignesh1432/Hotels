const login =(state=false,action) => {
    switch(action.type){
        case "SET_LOGIN" : return true;
        default : return state;
    }
}

export {login};