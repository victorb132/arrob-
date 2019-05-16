import React, { Component } from 'react';
import { AsyncStorage, View, Text, TouchableOpacity } from 'react-native';


export default class Home extends Component {

logout = () => {
    //delete axios.defaults.headers.common['Authorization']
    AsyncStorage.removeItem('userData')
    this.props.navigation.navigate('Loading')
}

  render() {
    return (
      <View style={{ justifyContent: 'center', marginTop: 50, marginLeft: 50}}>
        <TouchableOpacity onPress={this.logout} >
            <Text>SAIR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
