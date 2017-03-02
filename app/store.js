import { createStore, compose } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

// create an object for the default data
const defaultState = {
  data:[],
  navigationState: {id: 'gallery'},
  imageId:null
};

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() :f => f);

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
