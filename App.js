import React from 'react'

import AppNavigation from './src/Components/Routes'

console.disableYellowBox = true

//Componente root da aplicação.
export default class App extends React.Component {
  render() {
    return (
      <AppNavigation />
    )
  }
}