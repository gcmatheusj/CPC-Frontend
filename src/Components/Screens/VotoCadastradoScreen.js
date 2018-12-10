import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button} from 'native-base';
import { Constants } from "expo";

import Imagem from '../../../assets/logo.png'

export default class VotoCadastradoScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.statusBar} />
        </View>
        <View style={styles.Styleview1}>
          <View style={styles.logo}>
              <Image source={Imagem} style={styles.Styleimagem} />
          </View>
          <View>
            <View style={styles.Styleview2}>
              <Text style={styles.Styletext1}>Voto Cadastrado</Text>
              <Text style={styles.Styletext2}>Muito obrigado pela sua participação e</Text>
              <Text style={styles.Styletext2}>colaboração!</Text>        
            </View>
          </View>
          
              <Button block 
                style={styles.btnTelaInicial} 
                onPress={() => this.props.navigation.navigate('Categorias')}
              >
                  <Text style={styles.Styletext3}>TELA INICIAL</Text>
              </Button>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    statusBar: {
      backgroundColor: "#212121",
      height: Constants.statusBarHeight
    },
    btnTelaInicial: {
      backgroundColor: '#2a80dd',
      marginLeft: 10, 
      marginRight: 10
    },
    logo: {
        height: 150,
        marginBottom: 20,
    },
    Styleview1: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    Styleview2: {
      alignItems: "center", 
      marginBottom: 50
    },
    Styleimagem: {
      height: 150, 
      width: 350, 
      marginTop: -25 
    },
    Styletext1: {
      color: "black", 
      fontSize: 25, 
      margin: 5
    },
    Styletext2: {
      color: "black", 
      fontSize: 15, 
      margin: 5
    },
    Styletext3: {
      color: 'white', 
      fontWeight: 'bold'
    }
  });
