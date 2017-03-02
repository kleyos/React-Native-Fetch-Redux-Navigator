import React, { Component } from 'react';

import { StyleSheet, 
         ScrollView, 
         View, 
         Navigator} from 'react-native';

import Gallery from './Gallery'; 
import Single from './Single'; 

import {getData} from '../actions/actionCreators';

class Main extends Component {

  componentWillMount(){
    const url = 'https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF';
    
    fetch(url)
      .then(response => response.json())
      .then(responseJson => getData(responseJson.photos))
      .catch( error => console.error(error));
  }

  render() {
    return ( <Navigator 
                   data = {this.props.data}
                   id = {this.props.imageId}
                   initialRoute={this.props.navigationState}
                   renderScene={this.navigatorRenderScene} /> );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    
    const data = this.data ? this.data : null;
    const imId = this.id;
    
    switch (route.id) {
      case 'gallery':
        return (<ScrollView ><Gallery navigator={navigator} title="gallery"  data={data} /></ScrollView> );
      case 'single':
        return (<View style={{flex:1}}><Single navigator={navigator} title="single" data={data} id={imId}/></View>);
    }
  }
}

export default Main;

