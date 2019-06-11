import React, { Component } from 'react'
import {
  StyleSheet, TouchableOpacity, View, Image,
  ScrollView, Text, AsyncStorage
} from 'react-native'
import { RNCamera } from 'react-native-camera'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Button from '../components/Button'
import Ionicon from 'react-native-ionicons'
import { metrics, fonts, colors } from '../styles'
import axios from 'axios'
import RNFS from 'react-native-fs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

class Home extends Component {

  state = {
    path: null,
    isFront: false,
    flashOn: false,

    path: '',
    mimeTypeImage: 'image/jpg',
    hashImage: null,
    fileNameImage: '',
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.6, base64: true, fixOrientation: true, pauseAfterCapture: true }
      const data = await this.camera.takePictureAsync(options)
      console.log(data)
      const path = data.uri
      const fileName = path.substring(path.lastIndexOf('/') + 1)
      this.setState({ hashImage: data.base64, fileNameImage: fileName, path: data.uri })
    }
  }

  logout = () => {
    //delete axios.defaults.headers.common['Authorization']
    AsyncStorage.removeItem('userData')
    this.props.navigation.navigate('Loading')
  }

  imageDocument = () => {

    let axiosConfig = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    };

    var file = {
      uri: this.state.path,
      type: 'image/jpeg',
      name: 'boi.jpg',
    }

    console.log(file)
    const dataForm = new FormData();
    dataForm.append('file', file)

    axios.post('http://9919a3f5.ngrok.io/upload', dataForm, axiosConfig)
      .then(res => {
        console.log(res)
        this.props.navigation.navigate('Result')
      }).catch(err => {
        console.log(err)
        this.props.navigation.navigate('Result')
      })
  }




  renderCamera() {
    return (
      <View style={styles.container}>
        {this.state.isFront ?
          <RNCamera
            ref={camera => { this.camera = camera }}
            style={styles.preview}
            type={RNCamera.Constants.Type.front}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            flashMode={this.state.flashOn ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            <View style={styles.offset}>
              <View style={[{ flex: wp('1.1%') }, styles.maskRow, styles.maskFrame]} />
              <View style={[{ flex: wp('6%') }, styles.maskCenter]}>
                <View style={[{ flex: wp('6%') }, styles.maskFrame]} />
                <View style={styles.maskInner} />
                <View style={[{ flex: wp('6%') }, styles.maskFrame]} />
              </View>
              <View style={[{ flex: wp('2%') }, styles.maskRow, styles.maskFrame]} />
            </View>
          </RNCamera>
          : <RNCamera
            ref={camera => { this.camera = camera }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            flashMode={this.state.flashOn ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            <View style={styles.offset}>
              <View style={[{ flex: wp('1.1%') }, styles.maskRow, styles.maskFrame]} />
              <View style={[{ flex: wp('6%') }, styles.maskCenter]}>
                <View style={[{ flex: wp('6%') }, styles.maskFrame]} />
                <View style={styles.maskInner} />
                <View style={[{ flex: wp('6%') }, styles.maskFrame]} />
              </View>
              <View style={[{ flex: wp('2%') }, styles.maskRow, styles.maskFrame]} />
            </View>
          </RNCamera>}

        <View style={styles.capture}>
          {this.state.flashOn ? <TouchableOpacity
            style={{ width: wp('6%'), height: hp('5%'), marginLeft: '10%', marginTop: '4%' }}
            onPress={() => { this.setState({ flashOn: false }) }}>
            <Ionicon name='flash' size={35} color='yellow' type='solid' />
          </TouchableOpacity>
            : <TouchableOpacity
              style={{ width: wp('6%'), height: hp('5%'), marginLeft: '10%', marginTop: '4%' }}
              onPress={() => { this.setState({ flashOn: true }) }}>
              <Ionicon name='flash-off' size={35} color='white' type='solid' />
            </TouchableOpacity>}

          <TouchableOpacity
            style={{ marginLeft: '27%' }}
            onPress={this.takePicture}>
            <Icon name='circle' size={70} color='white' type='solid' />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: '22%', marginTop: '4%' }}
            onPress={() => { this.setState({ isFront: !this.state.isFront }) }}>
            <Ionicon name='reverse-camera' size={35} color='white' type='solid' />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  renderImage() {
    return (

      <ScrollView style={styles.containerRenderImage}>

        <View style={styles.subContainer}>
          <Text style={styles.title}>Foto do gado</Text>
          <Text style={styles.subtitle}>
            Verifique se a foto abaixo está de acordo com as instruções anteriores:
            </Text>
          <Image source={{ uri: this.state.path }} style={styles.previewImage} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button onPress={this.imageDocument} type='value-modal-green' style={{ marginBottom: 5 }}> Finalizar </Button>
          <Button onPress={() => this.setState({ path: null })} type='value-modal-blue' style={{ marginBottom: 10, justifyContent: 'center' }}> Voltar e tirar outra foto</Button>
        </View>
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    alignItems: 'center'
  },
  capture: {
    marginTop: -100,
    marginBottom: 10,
    flexDirection: 'row'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  previewImage: {
    height: hp('70%'),
    width: wp('90%'),
    padding: metrics.padding,
  },
  cancel: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  },

  //----------------------------------------

  containerRenderImage: {
    flex: 1,
    backgroundColor: colors.greyLight
  },
  subContainer: {
    padding: metrics.padding,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.familyBlack,
    alignSelf: 'center'
  },
  subtitle: {
    fontSize: fonts.big,
    marginTop: '2%',
    fontFamily: fonts.familyRegular,
    marginBottom: 20,
    textAlign: 'center'
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
    fontSize: fonts.big
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

  offset: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  maskFrame: {
    backgroundColor: 'rgba(1,1,1,0.9)',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: { flexDirection: 'row' },

  maskInner: {
    height: hp('59.2%'),
    width: wp('70%'),
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
  },
})


