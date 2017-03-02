import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Picture from './Picture';


class Single extends Component {
  
  render() {
    
    const imgId = this.props.id;
    const     i = this.props.data.findIndex((img) => img.id === +imgId );
    const    dt = this.props.data[i];

    return (
      
      <View style={styles.single}>

        <Button onPress={this.props.navigator.pop}
                title='Back'
                color="#dfdfdf"
                accessibilityLabel="Back to Gallery"
                />
        
        <Picture url={dt.image_url} name={dt.name}/>
        <Text >{dt.description}</Text>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  single: {
    flex: 1, 
    alignItems:'center'
  },
});

export default Single;
