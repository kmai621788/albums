import React, { Component } from 'react';
import {Text,View, Image,Linking,Alert} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import NetInfo from "@react-native-community/netinfo";

//const AlbumDetail = ({album}) => {
  export default class AlbumDetail extends React.Component{

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

    render(){
  const {collectionName,artistName,artworkUrl100,previewUrl,trackViewUrl} = this.props.album;
  const {thumnailStyle,headerContentStyle,thumbnailContainerStyle,headerTextStyle,imageStyle} = styles
  
  NetInfo.fetch().then(state => {
    
    console.log("Is connected?", state.isConnected);
    this.isConnected = state.isConnected;
    console.log("Is-- connected?", this.isConnected);
  });

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
 
      
  
  {/* <CardSection >
  <Image  style = {imageStyle} 
  source = {{ uri: previewUrl }} />
  </CardSection> */}
  <CardSection >
  <Button onPress = {() => this.isConnected ? Linking.openURL(trackViewUrl): this.alert()}>
      Buy Now
      </Button>
  <Button onPress = {() => this.isConnected ? this.props.navigation.navigate('Details',{ album: this.props.album}): this.alert() }>
      Details
      </Button>
    
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
    flex: 1,
    width: null

  }

}


