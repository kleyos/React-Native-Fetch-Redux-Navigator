import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';

import data from './data';
import navigationState from './navigationState';
import imageId from './imageId';

const rootReducer = combineReducers({data, navigationState, imageId });

export default rootReducer;
