import React, { Component } from 'react';
import {  StyleSheet,  
		  Text,  
		  View,
		  Image,
		  TouchableHighlight} from 'react-native';

import {onSingle} from '../actions/actionCreators';

class Picture extends Component {
	
	handlePress(){
		onSingle(this.props.id);
		
		this.props.onPress();
	}
	
	render() {
		return (
			<View >
				<TouchableHighlight underlayColor="#D0D0D0" 
									onPress={this.handlePress.bind(this)}>
					<Image source={{uri:this.props.url}} style={styles.image} />
				</TouchableHighlight>
				
				<Text style={styles.text}>{this.props.name}</Text>
			</View> 
			)
	}
}
const styles = StyleSheet.create({
  image: {
    width: 250, 
  	height: 250,
  	marginVertical:20,
  },
  
  text:{
  	width: 250, 
  	textAlign:'center',
  },
});
export default Picture;
