import React, { Component } from 'react';
import {getData} from '../actions/actionCreators';

import { StyleSheet, Text, ScrollView, Navigator} from 'react-native';

import Gallery from './Gallery'; 
class Main extends Component {

  componentDidMount(){
    const url = 'https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF';
    
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {getData(responseJson.photos); console.log('data',this.props.data)} )
      .catch( error => console.error(error));
  }
    
  render() {
    return (
      <Navigator
      	initialRoute={this.props.navigationState}
      	renderScene={ (route, navigator) => {
        	return (<Gallery {...this.props} 
        					title={route.title} 
        					navigator={navigator}
        			/>)
      	} }
    />
    );
  }
}

export default Main;
//{React.cloneElement({...this.props}.children, {...this.props})}
// <ScrollView >
//         <Gallery {...this.props}/>
//       </ScrollView>