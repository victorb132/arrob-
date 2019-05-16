import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'
import AuthOrApp from './screens/AuthOrApp'
import Auth from './screens/Auth'
import CommonStyles from './CommonStyles'
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
    }
}

const MainNav = createSwitchNavigator(MainRoutes, {
    initialRouteName: 'Loading'
})

const MainNavigator = createAppContainer(MainNav)

export default MainNavigator