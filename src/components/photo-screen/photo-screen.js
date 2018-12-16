import React, {Component} from 'react';
import {Image} from 'react-native';


export default class PhotoScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('author'),
    };
  };

  render () {
    const { navigation } = this.props;
    const url = navigation.getParam('fullUrl');
    return (
      <Image source = {{uri: url}} style = {{flex: 1}}/>
    )
  }
}
