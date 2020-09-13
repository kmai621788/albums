import React, { Component } from 'react';
import {Text,View, Image,Linking,Alert} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import SoundPlayer from 'react-native-sound-player'
import { WebView } from 'react-native-webview';
import NetInfo from "@react-native-community/netinfo";

  export default class AlbumDetailsPage extends React.Component{
    isConnected = '';
    constructor(props) {
      super(props);
     
    }
   
    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;
      return {
          headerBackTitle: null,
          
      };
  };

  componentDidMount =() => {

    NetInfo.fetch().then(state => {
    
      console.log("Is connected?", state.isConnected);
      this.isConnected = state.isConnected;
      if(!state.isConnected){
         this.alert();
        

      }
    });



  }


  alert = () => {
    Alert.alert(
      "No Network",
      "Please Enable your Network",
      [
        
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  
    }
  playMusic = (previewUrl) => {
   try{
    SoundPlayer.playUrl(previewUrl)
   }catch(e){
     console.log("error",e);
   }
  }

    render(){
  const {collectionName,artistName,artworkUrl100,previewUrl,trackViewUrl} = this.props.navigation.state.params.album;
  const {thumnailStyle,headerContentStyle,thumbnailContainerStyle,headerTextStyle,imageStyle,imageStylee} = styles
return(
  <Card>
 <CardSection>
   <View style = {thumbnailContainerStyle}>
     <Image 
     style = {thumnailStyle}
     source = {{ uri: artworkUrl100 }}/>
   </View>
   
   <View style = {headerContentStyle}>
  <Text style = {headerTextStyle}> {artistName}</Text>
  <Text> {collectionName}</Text>
  </View>
  </CardSection>
  <CardSection >
  <WebView  style = {imageStyle} 
   
   originWhitelist={['*']}
   source={{ uri: previewUrl }}
 />
  
      </CardSection>
  <CardSection >
  <WebView  style = {imageStylee} 
   
   originWhitelist={['*']}
   source={{ uri: trackViewUrl }}
 />
  </CardSection>
  

  </Card>
  )
}
  }

const styles = {
  headerContentStyle:{
    flexDirection: 'column',
    justifyContent: 'space-around'

  },
  headerTextStyle:{
    fontSize:18
  },
  thumnailStyle :{
    height : 50,
    width : 50

  },
  thumbnailContainerStyle :{
    justifyContent : 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10

  },
  imageStyle:{
    height: 300,
    flex: 1.1,
    padding: 120,
    paddingTop : 12,
    
    width: null

  },
  imageStylee:{
    height: 300,
    flex: 1,
    padding: 220,
   
    width: null

  }

}



