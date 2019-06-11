import React, { Component } from 'react';
import { View, Image } from 'react-native';
//import backgroundImage from '../../../assets/imgs/logo.png'
import { withNavigation } from 'react-navigation'

import styles from './styles';

class HeaderPropossal extends Component {
  render(){
    return(
    <View style={styles.container}>
      {/* <Image source={backgroundImage} style={styles.title} /> */}
    </View>
    )
  }
}

export default withNavigation(HeaderPropossal)