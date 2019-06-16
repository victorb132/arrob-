import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from '../components/Button'
import HeaderPropossal from '../components/HeaderPropossal';

export default class Result extends Component {

    sendToHome = () => {
        this.props.navigation.navigate('CameraDocument')
    }

    render() {

        const item = this.props.navigation.getParam('message', 'Nada encontrado')
        console.log(item)

        return (
            <View style={styles.container}>
            <HeaderPropossal/>
                <View style={styles.centerResult}>
                    <Text> {item} </Text>
                    <Button onPress={this.sendToHome} style={{marginTop: 30}}>INICIO</Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centerResult: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        top: '30%'
    }
})