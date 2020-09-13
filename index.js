import React ,{Component} from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import {StackNavigator} from 'react-navigation';
import AlbumDetailsPage from './src/components/AlbumDetailsPage';
import Navigation from './App'






AppRegistry.registerComponent('albums', () => Navigation);