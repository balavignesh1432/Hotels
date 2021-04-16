import {facilities} from "./FacilityReducer";
import {stars} from "./StarReducer";
import {rooms} from "./RoomReducer";
import {budget} from "./BudgetReducer";
import {city} from './cityReducer';
import {sort} from './SortReducer';
import {result} from './ResultReducer';
import {current} from './CurrentReducer';
import {favourites} from './FavouriteReducer';
import {login} from './LoginReducer';
import {register} from './RegisterReducer'

import { combineReducers } from "redux";

export const allReducers = combineReducers({facilities,stars,rooms,budget,city,sort,result,current,favourites,login,register});