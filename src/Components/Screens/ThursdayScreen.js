import React, { Component } from "react";
import { StyleSheet, View, Text, Image, AsyncStorage, Alert } from "react-native";
import { Card, Button, Label } from "native-base";
import logo1 from "../../../assets/velhochico.png";
import logo2 from "../../../assets/universitario.png";
import logo3 from "../../../assets/brasileiro.png";
import axios from "axios";

const days = ["QuintaAmbiental", "QuintaUniversitario", "QuintaBrasileiro"];
const logos = [logo1, logo2, logo3];
const events = [
  "5º MOSTRA DO VELHO CHICO DE CINEMA AMBIENTAL",
  "8º FESTIVAL DE CINEMA UNIVERSITÁRIO DE ALAGOAS",
  "11º FESTIVAL DO CINEMA BRASILEIRO"
];

export default class ThursdayScreen extends Component {
  state = {
    categoria1: "ambientalDiaTres",
    categoria2: "universitarioDiaTres",
    categoria3: "brasileiroDiaTres",
    statusAmbiental: "",
    statusUniversitario: "",
    statusBrasileiro: ""
  };

  componentDidMount() {
    this.votingStatusAmbiental();
    this.votingStatusUniversitario();
    this.votingStatusBrasileiro();
  }

  votingStatusAmbiental = () => {
    axios
      .get("http://cpc-backend.herokuapp.com/votingTime/ambientalQui")
      .then(res => {
        this.setState({statusAmbiental: res.data.status});
      });
  };

  votingStatusUniversitario = () => {
    axios
      .get("http://cpc-backend.herokuapp.com/votingTime/universitariaQui")
      .then(res => {
        this.setState({statusUniversitario: res.data.status});
      });
  };

  votingStatusBrasileiro = () => {
    axios
      .get("http://cpc-backend.herokuapp.com/votingTime/brasileiraQui")
      .then(res => {
        this.setState({statusBrasileiro: res.data.status});
      });
  };

  handleAlreadyVote = categoria => {
    switch (this.state.statusAmbiental) {
      case 1:
        AsyncStorage.getItem(categoria).then(categoria => {
          if (!categoria) {
            this.props.navigation.navigate("QuintaAmbiental");
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

  handleAlreadyVote1 = categoria => {
    switch (this.state.statusUniversitario) {
      case 1:
        AsyncStorage.getItem(categoria).then(categoria => {
          if (!categoria) {
            this.props.navigation.navigate("QuintaUniversitario");
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

  handleAlreadyVote2 = categoria => {
    switch (this.state.statusBrasileiro) {
      case 1:
        AsyncStorage.getItem(categoria).then(categoria => {
          if (!categoria) {
            this.props.navigation.navigate("QuintaBrasileiro");
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
            onPress={() => this.handleAlreadyVote(this.state.categoria1)}
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
          <Button
            transparent
            style={styles.btn}
            onPress={() => this.handleAlreadyVote1(this.state.categoria2)}
          >
            <Card style={styles.styleCard}>
              <View style={styles.viewCard}>
                <Image source={logos[1]} style={styles.image} />
              </View>
              <View style={styles.StyleView} >
                <Text style={styles.texto}>{events[1]}</Text>
              </View>
            </Card>
          </Button>
          <Button
            transparent
            style={styles.btn}
            onPress={() => this.handleAlreadyVote2(this.state.categoria3)}
          >
            <Card style={styles.styleCard}>
              <View style={styles.viewCard}>
                <Image source={logos[2]} style={styles.image} />
              </View>
              <View style={styles.StyleView} >
                <Text style={styles.texto}>{events[2]}</Text>
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
    backgroundColor: "#FAFAFA"
  },
  labelTexto: {
    color: "#282f3e",
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
    flex: 1
  },
  btn: {
    height: 120,
    width: "100%"
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
    justifyContent: "center"
  },
  texto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#282f3e",
    margin: 5,
    width: "85%"
  },
  StyleView: {
    height: "100%", 
    width: 260, 
    justifyContent: "center"
  }
});
