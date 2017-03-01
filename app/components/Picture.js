import React, { Component } from 'react';
import {  AppRegistry,  
		  StyleSheet,  
		  Text,  
		  View,
		  Image,
		  TouchableHighlight} from 'react-native';

import {onSingle} from '../actions/actionCreators';

class Picture extends Component {

	handlePress(){
		console.log('this',this)
  		onSingle(this.props.id)
  		//console.log('id',this.props.id)
  	}
	render() {
		return (
			<View >
				<TouchableHighlight underlayColor="#D0D0D0" onPress={this.handlePress.bind(this)}>
					<Image source={{uri:this.props.url}} style={styles.image} />
				</TouchableHighlight>
				<Text style={styles.text}>{this.props.name}</Text>
			</View> )
	}
}
const styles = StyleSheet.create({
  image: {
    width: 150, 
  	height: 150,

  },
  text:{
  	width: 150, 
  	textAlign:'center',
  },
});
export default Picture;
//<Text>I'm Image Component</Text>