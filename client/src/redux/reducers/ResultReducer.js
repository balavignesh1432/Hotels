import data from '../../Data';

const result = (state=data,action) => {
    switch(action.type){
        case "SET_RESULT": return action.payload;
        default : return state;
    }
}

export {result};