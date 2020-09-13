import React, { Component } from 'react';
import {View, ImagePropTypes} from 'react-native';


const CardSection = (props) => {

    return(
        <View style = {styles.containerStyle}>
          {props.children}
        </View>

    )

};

const styles = {
  containerStyle :{
    color:'#D898EC',
    borderBottomWidth: 1,
    padding:5,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    bordercolor: '#ddd',
    position: 'relative'

  }

}

export default CardSection;