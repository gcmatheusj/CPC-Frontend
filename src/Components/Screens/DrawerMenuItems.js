import { createDrawerNavigator } from 'react-navigation'

//import HomeScreen from './CategoriasScreen'
import SobreScreen from './SobreScreen'
import ProgramacaoScreen from './ProgramacaoScreen'
import CategoriasScreen from './CategoriasScreen';

export const DrawerMenu = createDrawerNavigator({
    
    Programacao: ProgramacaoScreen,
    Sobre: SobreScreen
}, {
        drawerWidth: 250,
        contentOptions: {
            activeTintColor: "#212121",
            inactiveTintColor: "#5f5f5f",
        },
}
)

