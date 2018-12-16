import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import ListPhoto from './src/components/list-photo';
import HomeScreen from './src/components/home-screen/home-screen';
import PhotoScreen from './src/components/photo-screen/photo-screen';



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Photo: PhotoScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
