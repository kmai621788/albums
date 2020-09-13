// import React from 'react'
// import { View, Text } from 'react-native'
// import axios from "axios";
// import AlbumList from './components/AlbumList'

// export default class App extends React.Component {

//   data=[];
//   constructor() {
//     super()

   
//    // this.url = 'https://itunes.apple.com/search?term=jack+johnson'
    
//    this.state = {records : []};
//     this.state = {
//       photos: null,
//       fetching: true
//     }
//   }

//   componentDidMount() {
  
//     axios.get("https://itunes.apple.com/search?term=jack+johnson")
//     .then(response=> this.setState({records : response.data.results})
    
     
//     );
    
    
//       this.setState({
//         photos: "" ,
        
//       })
//   }

//   render() {
//    // const { artistName } = this.state.records

//    console.log("response1-->", this.state.records);
//     return (
//       <View style={{marginTop: 20}}>
//         <AlbumList albums = "this.state.records"  />
//       </View>
//     )
//   }
// }
