import React, { Component } from "react"
import { StyleSheet, View, Image, Text, AsyncStorage, Alert } from "react-native"
import { Card, Button, Label, } from "native-base"
import logo3 from '../../../assets/brasileiro.png'
import axios from "axios";

const days = ["SabadoBrasileiro"];
const logos = [logo3];
const events = ["11º FESTIVAL DO CINEMA BRASILEIRO"];

export default class SaturdayScreen extends Component {
    state = {
    categoria3: "brasileiroDiaCinco",
    statusBrasileiro: ""
  };

  componentDidMount() {
    this.votingStatus();
  }

  votingStatus = () => {
    axios
      .get("http://cpc-backend.herokuapp.com/votingTime/brasileiraSab")
      .then(res => {
        this.setState({statusBrasileiro: res.data.status});
      });
  };

  handleAlreadyVote = categoria => {
    switch (this.state.statusBrasileiro) {
      case 1:
        AsyncStorage.getItem(categoria).then(categoria => {
          if (!categoria) {
            this.props.navigation.navigate("SabadoBrasileiro");
          } else if (categoria === "true") {
            Alert.alert(
              "Aviso",
              "Você já votou nesta categoria.",
              [
                { text: "Ok" }
              ],
              { cancelable: false }
            );
          }
        });
        break;
      case 0:
        Alert.alert(
          "Aviso",
          "Você não pode votar nesta categoria no momento.",
          [
            { text: "Ok" }
          ],
          { cancelable: false }
        );
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.styleTitle}>
            <Label style={styles.labelTexto}>
              Escolha o evento em que deseja votar:
            </Label>
          </View>
        </View>
        <View style={styles.viewCard}>
          <Button
            transparent
            style={styles.btn}
            onPress={() => this.handleAlreadyVote(this.state.categoria3)}
          >
            <Card style={styles.styleCard}>
              <View style={styles.viewCard}>
                <Image source={logos[0]} style={styles.image} />
              </View>
              <View style={styles.StyleView} >
                <Text style={styles.texto}>{events[0]}</Text>
              </View>
            </Card>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    labelTexto: {
        color:"#282f3e",
        fontSize: 16,
        marginBottom: 10
    },
    styleTitle: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.2)"
    },
    image: {
        height: 100,
        width: 100,
        flex: 1,    
    },
    btn: {
        height: 120,
        width: "100%",
    },
    styleCard: {
        height: "100%",
        width: "99%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    viewCard: {
        margin: 5,
        justifyContent: "center", 
    },
    texto: {
        fontSize: 16,
        fontWeight: 'bold',
        color:"#282f3e",
        margin: 5,
        width: '85%'
    },
    StyleView: {
      height: "100%", 
      width: 260, 
      justifyContent: "center"
    }
})