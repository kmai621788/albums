import React from 'react'

import AlbumList from './src/components/AlbumList';
import {createStackNavigator} from 'react-navigation-stack';
import AlbumDetailsPage from './src/components/AlbumDetailsPage';
import { createAppContainer } from 'react-navigation';
import Header from './src/components/header'



const Navigation = createStackNavigator(
  {
    Home: { screen: AlbumList },
    Details: { screen: AlbumDetailsPage },
    
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Album Detail'
    }
  }    
);
export default createAppContainer(Navigation);