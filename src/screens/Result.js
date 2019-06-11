import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from '../components/Button'
import HeaderPropossal from '../components/HeaderPropossal';

export default class Result extends Component {
    render() {
        return (
            <View>
            <HeaderPropossal/>
                <Text> Imagem enviada com sucesso! </Text>
                <Text> Resultado:  </Text>
                <Button>VAI PRO INICIO</Button>
            </View>
        )
    }
}
