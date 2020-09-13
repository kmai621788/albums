import React, { Component } from 'react';
import {Text,View, ScrollView} from 'react-native';
import axios from "axios";
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{

    static navigationOptions ={
        title : 'iTunes Albums',
        
    }

    constructor(props) {
        super(props)
        navigate = props.navigation,
       
       // this.url = 'https://itunes.apple.com/search?term=jack+johnson'
        
       this.state = {albums : []};
        this.state = {
          photos: null,
          fetching: true
        }
      }

    componentDidMount() {
  
        axios.get("https://itunes.apple.com/search?term=jack+johnson")
        .then(response=> this.setState({albums : response.data.results})
        
         
        );
    }

    renderAlbums(){

        if(this.state.albums && this.state.albums.length>0){
          return  this.state.albums.map(album => 
          <AlbumDetail key={album.collectionId} album = {album}
          navigation={this.props.navigation}/>)

          }}


    render(){

      //  console.log("response1-->", this.state.albums);

    return (
    <ScrollView>
    {this.renderAlbums()}
    </ScrollView>
    );
    }
}

export default AlbumList;