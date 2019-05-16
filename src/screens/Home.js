import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

logout = () => {
    //delete axios.defaults.headers.common['Authorization']
    AsyncStorage.removeItem('userData')
    props.navigation.navigate('Loading')
}

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.logout}>
            <Text>SAIR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
