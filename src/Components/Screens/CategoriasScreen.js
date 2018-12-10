import React, { Component } from "react"
import { View, StyleSheet, Text } from "react-native"
import { Button, Icon } from "native-base"

const dataDias = [
  "TERÇA - 27/11",
  "QUARTA - 28/11",
  "QUINTA - 29/11",
  "SEXTA - 30/11",
  "SÁBADO - 01/12"
];

const cores = ["#f73131", "#7b2adb", "#2a80dd", "#ffc128", "#ff672b"]
const days = ["Terca", "Quarta", "Quinta", "Sexta", "Sabado"]

export default class CategoriasScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Votação',
    headerTintColor: '#282f3e',
    headerStyle: {
        backgroundColor: '#BDBDBD'
    },
    headerLeft: (
        <Button style={styles.btn1} transparent
            onPress={() => navigation.openDrawer()}>
            <Icon name='md-menu' style={styles.StyleIcon} />
        </Button>
    )
})

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.divider}>
            <Text style={styles.texto}>Selecione o dia de votação</Text>
          </View>
        </View>
        <View>
          {dataDias.map((v, k) => {
              return (
                <Button
                  block
                  success
                  key={k}
                  style={{backgroundColor: cores[k], margin:10}}
                  onPress={() => this.props.navigation.navigate(days[k])}
                >
                  <Text style={styles.ableLabelBtn}>{v}</Text>
                  <Icon name="ios-arrow-forward"></Icon>
                </Button>
              )
            })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA"
  },
  divider: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)"
  },
  texto: {
    color: "#282f3e",
    fontSize: 16,
    marginBottom: 10
  },
  header: {
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  ableLabelBtn: {
    color: "white", 
    fontWeight: 'bold',
    flex: 1,
    paddingLeft: 15
  },
  btn1: {
    height: '100%'
  },
  StyleIcon: {
    color: '#282f3e'
  }
});
