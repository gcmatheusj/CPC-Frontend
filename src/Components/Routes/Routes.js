import { createStackNavigator } from 'react-navigation'

import CategoriasScreen from '../Screens/CategoriasScreen'
import SobreScreen from '../Screens/SobreScreen'
import TercaScreen from '../Screens/TuesdayScreen'
import QuartaScreen from '../Screens/WednesdayScreen'
import QuintaScreen from '../Screens/ThursdayScreen'
import SextaScreen from '../Screens/FridayScreen'
import SabadoScreen from '../Screens/SaturdayScreen'
import VotoCadastroScreen from '../Screens/VotoCadastradoScreen'

import TercaAmbiental from '../Screens/VotingCategories/TuesdayAmbientalScreen'
import TercaUniversitario from "../Screens/VotingCategories/TuesdayUniversitarioScreen"
import QuartaAmbiental from "../Screens/VotingCategories/WednesdayAmbientalScreen"
import QuartaUniversitario from "../Screens/VotingCategories/WednesdayUniversitarioScreen"
import QuintaAmbiental from "../Screens/VotingCategories/ThursdayAmbientalScreen"
import QuintaUniversitario from "../Screens/VotingCategories/ThursdayUniversitarioScreen"
import QuintaBrasileiro from "../Screens/VotingCategories/ThursdayBrasileiroScreen"
import SextaBrasileiro from "../Screens/VotingCategories/FridayBrasileiroScreen"
import SabadoBrasileiro from "../Screens/VotingCategories/SaturdayBrasileiroScreen"
import ProgramacaoScreen from "../Screens/ProgramacaoScreen"

export const CategoriasRoute = createStackNavigator({
    Categorias: {
        screen: CategoriasScreen,
    },
    Terca: {
        screen: TercaScreen,
        navigationOptions: {
            title: 'Categorias',
            headerTintColor: '#282f3e',
            headerStyle: {
                backgroundColor: '#BDBDBD'
            }
        }
    },
    Quarta: {
        screen: QuartaScreen,
        navigationOptions: {
            title: 'Categorias',
            headerTintColor: '#282f3e',
            headerStyle: {
                backgroundColor: '#BDBDBD'
            }
        }
    },
    Quinta: {
        screen: QuintaScreen,
        navigationOptions: {
            title: 'Categorias',
            headerTintColor: '#282f3e',
            headerStyle: {
                backgroundColor: '#BDBDBD'
            }
        }
    },
    Sexta: {
        screen: SextaScreen,
        navigationOptions: {
            title: 'Categorias',
            headerTintColor: '#282f3e',
            headerStyle: {
                backgroundColor: '#BDBDBD'
            }
        }
    },
    Sabado: {
        screen: SabadoScreen,
        navigationOptions: {
            title: 'Categorias',
            headerTintColor: '#282f3e',
            headerStyle: {
                backgroundColor: '#BDBDBD'
            }
        }
    },
    TercaAmbiental: {
        screen: TercaAmbiental,
        navigationOptions: {
            title: 'Cinema Ambiental',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#2E7D32'
            }
        }
    },
    TercaUniversitario: {
        screen: TercaUniversitario,
        navigationOptions: {
            title: 'Cinema Universitário',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#f73131'
            }
        }
    },
    QuartaAmbiental: {
        screen: QuartaAmbiental,
        navigationOptions: {
            title: 'Cinema Ambiental',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#2E7D32'
            }
        }
    },
    QuartaUniversitario: {
        screen: QuartaUniversitario,
        navigationOptions: {
            title: 'Cinema Universitário',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#f73131'
            }
        }
    },
    QuintaAmbiental: {
        screen: QuintaAmbiental,
        navigationOptions: {
            title: 'Cinema Ambiental',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#2E7D32'
            }
        }
    },
    QuintaUniversitario: {
        screen: QuintaUniversitario,
        navigationOptions: {
            title: 'Cinema Universitário',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#f73131'
            }
        }
    },
    QuintaBrasileiro: {
        screen: QuintaBrasileiro,
        navigationOptions: {
            title: 'Cinema Brasileiro',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#2a80dd'
            }
        }
    },
    SextaBrasileiro: {
        screen: SextaBrasileiro,
        navigationOptions: {
            title: 'Cinema Brasileiro',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#2a80dd'
            }
        }
    },
    SabadoBrasileiro: {
        screen: SabadoBrasileiro,
        navigationOptions: {
            title: 'Cinema Brasileiro',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#2a80dd'
            }
        }
    },
    Programacao: {
        screen: ProgramacaoScreen,
    },
    VotoCadastrado: {
        screen: VotoCadastroScreen,
        navigationOptions: {
            header: null
        }
    },
    Sobre: {
        screen: SobreScreen
    }
})
