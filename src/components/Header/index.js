import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import backgroundImage from '../../../assets/images/logo.png'
import { withNavigation } from 'react-navigation'

import styles from './styles';

class Header extends Component {
  render(){
    return(
    <View style={styles.container}>
      <Icon name="bars" size={30} style={styles.icon} onPress={this.props.navigation.openDrawer} />
      {/* <Image source={backgroundImage} style={styles.title} /> */}
    </View>
    )
  }
}

export default withNavigation(Header)