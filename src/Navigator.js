import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation'
import { Image } from 'react-native'
import React, {Text} from 'react'
import AuthOrApp from './screens/AuthOrApp'
import Auth from './screens/Auth'
import CommonStyles from './CommonStyles'
import CameraDocument from './screens/CameraDocument'
import Result from './screens/Result'
import Menu from './screens/Menu'
import Home from './screens/Home'
import Header from './components/Header'
import { colors, metrics, fonts} from './styles'
import HeaderPropossal from './components/HeaderPropossal';
import backgroundImage from '../assets/images/logo.png'

const MenuRoutes = {
    CameraDocument: {
        name: 'CameraDocument',
        screen: CameraDocument,
        navigationOptions: {
            title: 'Inicio'
        }
    }
}

const MenuConfig = {
    initialRouteName: 'CameraDocument',
    contentComponent: Menu
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const screensRoutes = createStackNavigator({  
    CameraDocument: {
        name: 'CameraDocument',
        screen: MenuNavigator,
        navigationOptions: {
            headerTitle: <Header/>,
            headerStyle: {
                backgroundColor: colors.red
              },
        }
    },
    Home: {
        name: 'Home',
        screen: Home,
        navigationOptions: {
            headerTitle:'Arrob@',
            headerStyle: {
                backgroundColor: colors.red,
                height: 60,
              },
            headerTintColor: '#fff',
        }
    },
    
})


const MainRoutes = {
    Loading: {
        name: 'Loading',
        screen: AuthOrApp
    },
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    screensRoutes: {
        name: 'screensRoutes',
        screen: screensRoutes,
    },
    Result: {
        name: 'Result',
        screen: Result,
        navigationOptions: {
            headerTitle:<HeaderPropossal/>,
            headerStyle: {
                backgroundColor: colors.red,
                height: 60,
              },
            headerTintColor: '#fff',
        }
    },
}

const MainNav = createSwitchNavigator(MainRoutes, {
    initialRouteName: 'Loading'
})

const MainNavigator = createAppContainer(MainNav)

export default MainNavigator