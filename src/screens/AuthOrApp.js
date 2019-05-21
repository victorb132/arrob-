import React, { Component } from 'react'
import {
    View,
    ActivityIndicator,
    StyleSheet,
    AsyncStorage
} from 'react-native'

export default class AuthOrApp extends Component {
    componentWillMount = async () => {
        const json = await AsyncStorage.getItem('userData')

        if (json) {
            // axios.defaults.headers.common['Authorization']
            //     = `bearer ${userData.token}`
            this.props.navigation.navigate('CameraDocument', 'TOKEN')
        } else {
            this.props.navigation.navigate('Auth')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }
})