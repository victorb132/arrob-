import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import backgroundImage from '../../../assets/images/logo.png'
import { withNavigation } from 'react-navigation'

import styles from './styles';

class HeaderPropossal extends Component {
  render(){
    return(
    <View style={styles.container}>
      {/* <Image source={backgroundImage} style={styles.title} /> */}
        <Text style={styles.title}>Arrob@</Text>
    </View>
    )
  }
}

export default withNavigation(HeaderPropossal)