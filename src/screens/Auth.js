import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Alert,
    AsyncStorage,
    Image
} from 'react-native'
import { showError } from '../common'
import AuthInput from '../components/AuthInput'
import CommonStyles from '../CommonStyles'
import img from '../../assets/images/bois2.jpg'
import logo from '../../assets/images/logo.png'
import { colors } from '../styles';

export default class Auth extends Component {
    state = {
        stageNew: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    signin = async () => {
        try {
            // const res = await axios.post(`${server}/signin`, {
            //     email: this.state.email,
            //     password: this.state.password
            // })

            // axios.defaults.headers.common['Authorization']
            //     = `bearer ${res.data.token}`
            AsyncStorage.setItem('userData', 'TOKEN')
            this.props.navigation.navigate('CameraDocument', 'TOKEN')
        } catch (err) {
            Alert.alert('Erro', 'Falha no Login!')
            //showError(err)
        }
    }

    signup = async () => {
        try {
            // await axios.post(`${server}/signup`, {
            //     name: this.state.name,
            //     email: this.state.email,
            //     password: this.state.password,
            //     confirmPassword: this.state.confirmPassword
            // })

            // Alert.alert('Sucesso!', 'Usuário cadastrado :)')
            this.setState({ stageNew: false })
        } catch (err) {
            showError(err)
        }
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            this.signup()
        } else {
            this.signin()
        }
    }

    render() {
        const validations = []

        validations.push(this.state.email && this.state.email.includes('@'))
        validations.push(this.state.password && this.state.password.length >= 6)

        if(this.state.stageNew) {
            validations.push(this.state.name && this.state.name.trim())
            validations.push(this.state.confirmPassword)
            validations.push(this.state.password === this.state.confirmPassword)
        }

        const validForm = validations.reduce((all, v) => all && v)

        return (
            <ImageBackground 
                source={img}
                style={styles.background}>
                <View style={styles.logo}>
                    <Image source={logo} style={styles.imageContainer} />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 
                            'Crie a sua conta' : 'Informe seus dados'}
                    </Text>
                    {this.state.stageNew &&
                        <AuthInput icon='user' placeholder='Nome'
                            style={styles.input}
                            value={this.state.name}
                            onChangeText={name => 
                                this.setState({ name })} />}
                    <AuthInput icon='at' placeholder='E-mail'
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={email => 
                            this.setState({ email })} />
                    <AuthInput icon='lock' secureTextEntry={true}
                        placeholder='Senha'
                        style={styles.input}
                        value={this.state.password}
                        onChangeText={password => 
                            this.setState({ password })} />
                    {this.state.stageNew &&
                        <AuthInput icon='asterisk'
                            secureTextEntry={true} placeholder='Confirmação'
                            style={styles.input}
                            value={this.state.confirmPassword}
                            onChangeText={confirmPassword => 
                            this.setState({ confirmPassword })} />}
                    <TouchableOpacity disabled={!validForm}
                        onPress={this.signinOrSignup}>
                        <View style={[styles.button, !validForm ? { backgroundColor: '#AAA' } : {}]}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar' : 'Entrar'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ padding: 10 }}
                    onPress={() => this.setState({ 
                        stageNew: !this.state.stageNew
                    })}>
                    <Text style={styles.buttonText}>
                        {this.state.stageNew ? 'Já possui conta?' 
                            : 'Ainda não possui conta?'}</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.red
    },
    logo: {
        width: '70%',
        height: '17%', 
        flexDirection: 'row', 
        alignSelf: 'center',
        borderRadius: 50,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.8)',
      },
      imageContainer: {
        flex:1,
        height: '90%',
        resizeMode: 'contain'
      },
    title: {
        fontFamily: CommonStyles.fontFamily,
        fontSize: 70,
        marginBottom: 10,
        color: 'white'
    },
    subtitle: {
        fontFamily: CommonStyles.fontFamily,
        fontSize: 20,
        color: 'white'
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,2)',
        padding: 20,
        width: '90%',
        borderRadius: 10
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF',
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 8
    },
    buttonText: {
        fontFamily: CommonStyles.fontFamily,
        fontSize: 20,
        color: 'white'
    }
})