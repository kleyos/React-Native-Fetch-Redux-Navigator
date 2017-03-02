import React, {Component} from 'react';
import Picture from './Picture';

import { ScrollView, View, StyleSheet, Text } from 'react-native';

class Gallery extends Component {

	handlePress(id){
	 	this.props.navigator.push({ id: 'single' })
	}

	render(){
		 const picture = this.props.data ? this.props.data.map( (img, index) => 
                              <Picture key={index} 
                                  url={img.image_url} 
                                  name={img.name}
                                  id={img.id}
                                  onPress={this.handlePress.bind(this)} /> ) : null;
		return (
				<ScrollView contentContainerStyle={styles.gallery}>
					{ picture }
				</ScrollView>
				)
	}
}

const styles = StyleSheet.create({
	gallery: {
		flex: 1, 
        alignItems:'center'
	},
});

export default Gallery;

