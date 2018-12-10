import React from "react"
import { Icon, Image } from 'native-base'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

import PreloadScreen from '../Screens/PreloadScreen'
import AuthScreen from '../Screens/AuthScreen'
import ProgramacaoScreen from "../Screens/ProgramacaoScreen"
import { CategoriasRoute } from './Routes'
import SobreScreen from '../Screens/SobreScreen'

//Navegador do Drawer Menu
const HomeRoute = createDrawerNavigator({
    Home: {
        screen: CategoriasRoute,
        navigationOptions: {
            drawerIcon: () => <Icon name="home" style={{color: "#2a80dd"}}/>,
        }
    },
    Programacao: ProgramacaoScreen,
    Sobre: SobreScreen,
},{
    //Style drawer
    drawerWidth: 200,
    contentOptions: {
        activeTintColor: "#2a80dd",
        inactiveTintColor: "#616161",
    },
})

//Navegador principal da aplicação.
const AppNavigation = createStackNavigator({
    Preload: {
        screen: PreloadScreen,
        navigationOptions: {
            header: null
        }
    },
    Auth: {
        screen: AuthScreen,
        navigationOptions: {
            header: null
        }
    },
    Home: HomeRoute
},
    {
        navigationOptions: {
            header: null
        }
    })

export default AppNavigation


