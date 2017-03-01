import React, {Component} from 'react';
import Picture from './Picture';

import { ScrollView, StyleSheet, View } from 'react-native';

class Gallery extends Component {



	render(){
	return (
			<ScrollView contentContainerStyle={styles.gallery} >
				{ this.props.data.map( (img, index) => 
				                	<Picture 
				                 	  key={index} 
				                      url={img.image_url} 
				                      name={img.name}
				                      id={img.id}
				                      //onPress={this.handlePress.bind(this)}
				                    />
	                    )}
			</ScrollView>

		)
	}
}
const styles = StyleSheet.create({
  gallery: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
//contentContainerStyle={styles.gallery}

export default Gallery;