import React, {Component} from 'react';
import {ScrollView} from 'react-native';

import ListPhoto from '../list-photo';

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Gallery: ',
    headerTitleStyle:{
      textAlign: 'center'
    }
  };

  onPressPhoto = ({fullUrl, author}) => {
    this.props.navigation.navigate('Photo', {fullUrl, author})
  }
  render() {
    return (
      <ScrollView>
        <ListPhoto onPressPhoto = {this.onPressPhoto}/>
      </ScrollView>
    );
  }
}
