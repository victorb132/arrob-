import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { colors, fonts, metrics } from '../styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

class CameraDocument extends Component {

	sendToCameraDocument = () => {
		this.props.navigation.navigate('Home')
	}

	render() {
		return (
			<ScrollView style={styles.container}>
			<View style={styles.iconBar}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Icon name='bars' size={20} color='red' />
        </TouchableOpacity>
      </View>
				<View style={styles.subContainer}>
					<Text style={styles.title}>Imagem do Boi</Text>
					<Text style={styles.subtitle}>
						Tire uma foto do boi para nossa IA analisá-lo.</Text>
					<View style={{ marginBottom: '2%' }}>
						{/* <Image source={imageDoc} style={styles.imageContainer} /> */}
					</View>
					<Text style={styles.subtitle}>
						Clique no icone abaixo para iniciar o modo câmera
                    </Text>
				</View>
				<View style={{ alignItems: 'center', marginBottom: '5%' }}>
					<TouchableOpacity onPress={this.sendToCameraDocument}>
						<View style={styles.icon}>
							<Icon name='camera' size={25} style={{ color: '#FFF' }} />
						</View>
					</TouchableOpacity>
				</View>
				<View>
					
				</View>
			</ScrollView>
		);
	}
}

export default CameraDocument



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.greyLight
	},
	subContainer: {
		padding: metrics.padding,
		marginTop: 20
	},
	title: {
		fontSize: 20,
		fontFamily: fonts.familyBlack,
		marginTop: '3%',
		marginTop: '10%'
	},
	subtitle: {
		fontSize: fonts.big,
		marginTop: '2%',
		textAlign: 'left',
		fontFamily: fonts.familyRegular,
		marginBottom: 20,
		color: colors.dark
	},
	button: {
		position: 'relative',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	price: {
		color: colors.light,
		fontSize: fonts.big,
	},
	titleData: {
		fontWeight: 'bold',
		color: colors.darker,
		marginBottom: 10,
		fontSize: fonts.big,
	},
	linkToHistory: {
		textDecorationLine: metrics.underline,
		color: colors.link,
		alignSelf: 'flex-start',
		marginTop: 10
	},
	exclude: {
		backgroundColor: 'red',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	excludeText: {
		color: '#FFF',
		fontSize: 20,
		margin: 10,
	},
	imageContainer: {
		// width: (width - 105),
		// padding: metrics.padding,
		alignSelf: 'center',
		width: 170,
		height: 150
	},
	image: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'contain'
	},
	icon: {
		borderColor: 'rgba(0,0,0,0.2)',
		alignItems: 'center',
		justifyContent: 'center',
		width: wp('17%'),
		height: wp('17%'),
		backgroundColor: colors.red,
		borderRadius: 50,
	}
})
