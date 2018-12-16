import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ActivityIndicator} from 'react-native';

import UnsplashService from '../../service-unsplash';
import styles from './list-photo-style';

export default class ListPhoto extends Component {
  unsplashService = new UnsplashService();
  state = {
    photoList: false
  }


  componentDidMount(){
    this.unsplashService.getPhotos()
        .then((photoList) => {
          this.setState({photoList});
        })
        .catch(e=>console.warn(e));
  }
  renderPhotos (arr) {
    return arr.map(({thumbUrl, author, id, fullUrl}) => {
      return (
        <TouchableOpacity onPress = {()=>this.props.onPressPhoto({fullUrl, author})} key = {id} style = {styles.element}>
          <Image source= {{uri: thumbUrl}}
                 style={styles.image}/>
          <Text style = {{paddingLeft: 10, fontSize: 14}}>Photographed by</Text>
          <Text style = {styles.textAuthor}>{author}</Text>
        </TouchableOpacity>
      )
    });
  }
  render() {
    if(!this.state.photoList) {
      return (
        <View style= {styles.loader}>
          <ActivityIndicator size= "large" color = "#000000"/>
        </View>
      )
    }
    const elements = this.renderPhotos(this.state.photoList);
    return (
      <View style = {styles.container}>
        {elements}
      </View>
    )
  }
}
