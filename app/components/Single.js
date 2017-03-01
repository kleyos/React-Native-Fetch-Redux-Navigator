import React, {Component} from 'react';
import { View, Text } from 'react-native';

import Picture from './Picture';
import TappableRow from './TappableRow';

import {onBack} from '../actions/actionCreators';

class Single extends Component {
  
  handlePress(){
  	onBack()
  }

  render() {
    // const imgId = this.props.id;
    // console.log('imgId', imgId);    
    
    // const i= this.props.data.findIndex((img) => img.id === +imgId );
    // const dt = this.props.data[i];

    return (
      
      <View >
        <TappableRow onPress={this.handlePress.bind(this)} />
        <Text >I/m single</Text>
      </View>
    )
  }
}

export default Single;
        // <Picture url={dt.image_url} name={dt.name}/>
        // <Text >{dt.description}</Text>