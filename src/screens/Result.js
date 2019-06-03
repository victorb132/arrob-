import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Result extends Component {
    render() {
        return (
            <View>
                <Text> Imagem enviada com sucesso! </Text>
                <Text> Resultado:  </Text>
            </View>
        )
    }
}
