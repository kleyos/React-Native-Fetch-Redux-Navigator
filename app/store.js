import { createStore, compose } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

//import { NavigationExperimental } from 'react-native';

// create an object for the default data
const defaultState = {
  data:[],
  navigationState: {
        index: 0, // Starts with first route focused.
        title: 'My Initial Scene - Gallery' , // Starts with only one route.
      },
  imageId:''
};

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() :f => f);

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
