import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation'
import AuthOrApp from './screens/AuthOrApp'
import Auth from './screens/Auth'
import CommonStyles from './CommonStyles'
import CameraDocument from './screens/CameraDocument'
import Result from './screens/Result'
import Menu from './screens/Menu'
import Home from './screens/Home'


const MainRoutes = {
    Loading: {
        name: 'Loading',
        screen: AuthOrApp
    },
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: Home
    },
    CameraDocument: {
        name: 'CameraDocument',
        screen: CameraDocument
    },
    Result: {
        name: 'Result',
        screen: Result
    }
}

const MenuRoutes = {
    CameraDocument: {
        name: 'CameraDocument',
        screen: CameraDocument
    }
}

const MenuConfig = {
    initialRouteName: 'CameraDocument',
    contentComponent: Menu,
        contentOptions: {
        labelStyle: {
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            color: '#080',
        }
    }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const MainNav = createSwitchNavigator(MainRoutes, {
    initialRouteName: 'Loading'
})

const MainNavigator = createAppContainer(MainNav)

export default MainNavigator