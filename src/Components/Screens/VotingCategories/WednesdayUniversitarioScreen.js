import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  AsyncStorage,
  Alert
} from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import {
  Button,
  ListItem,
  Left,
  Right,
  Radio,
  Item,
  Input,
  Spinner
} from "native-base";
import axios from "axios";

const selected = ["movieOne", "movieTwo", "movieThree", "movieFour"];
const filmes = [
  "Tetê",
  "Entre a rua e o palco",
  "Cravo, Lírio e Rosa",
  "Cartucho de Super Nitendo em anéis de Saturno"
];

export default class WednesdayUniversitarioScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieSelected: "",
      category: "Festival de Cinema Universitario de Alagoas",
      userName: "",
      token: "",
      password: "",
      isFetching: ""
    };
  }

  componentDidMount() {
    this.getToken();
    this.currentUser();
  }

  //Action no Redux
  getToken = () => {
    AsyncStorage.getItem("jwt").then(token => {
      this.setState({ token: token });
    });
  };

  //Action no Redux
  currentUser = () => {
    AsyncStorage.getItem("user").then(user => {
      this.setState({ userName: user });
    });
  };

  setVotacao = () => {
    const vote = "true";
    AsyncStorage.setItem("universitarioDiaDois", vote);
  };

  //Action no Redux
  handleVote = () => {
    this.setState({ isFetching: true });
    axios
      .post(
        "https://cpc-backend.herokuapp.com/api/vote",
        {
          categoryMovie: this.state.category,
          userName: this.state.userName,
          movieName: this.state.movieSelected,
          password: this.state.password
        },
        {
          headers: {
            Authorization: `Bearer ${this.state.token}`
          }
        }
      )
      .then(res => {
        if (res.data.error === "no movie or password provided") {
          this.setState({ isFetching: false });
          Alert.alert(
            "Erro",
            "Você esqueceu de informar os dados necessários!",
            [{ text: "Ok" }],
            { cancelable: false }
          );
        }
        if (res.data.error === "no movie selected") {
          this.setState({ isFetching: false });
          Alert.alert(
            "Erro",
            "Você esqueceu de selecionar um filme!",
            [{ text: "Ok" }],
            { cancelable: false }
          );
        }
        if (res.data.error === "no password provided") {
          this.setState({ isFetching: false });
          Alert.alert(
            "Erro",
            "Você esqueceu de informar a senha da categoria!",
            [{ text: "Ok" }],
            { cancelable: false }
          );
        }
        if (res.data.error === "invalid vote password") {
          this.setState({ isFetching: false });
          Alert.alert("Erro", "Senha incorreta!", [{ text: "Ok" }], {
            cancelable: false
          });
        }

        if (res.data.vote) {
          this.setVotacao();
          const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: "VotoCadastrado" })
            ]
          });
          this.props.navigation.dispatch(resetAction);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  //Action no Redux.
  handleChangeSenha = senha => {
    this.setState({ password: senha });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.StyleView}>
            <Text style={styles.texto}>Selecione um dos filmes abaixo:</Text>
          </View>
        </View>
        <Item regular style={styles.input}>
          <Input
            selectionColor="#2a80dd"
            placeholder="Digite a senha da categoria"
            autoCorrect={false}
            secureTextEntry={true}
            autoCapitalize='none'
            onChangeText={this.handleChangeSenha}
          />
        </Item>
        <ScrollView>
          {filmes.map((value, key) => {
            return (
              <ListItem style={styles.item} key={key}>
                <Left>
                  <Text>{value}</Text>
                </Left>
                <Right>
                  <Radio
                    onPress={() => {
                      this.setState({ movieSelected: value });
                    }}
                    selected={this.state.movieSelected === value}
                    selectedColor="#f73131"
                  />
                </Right>
              </ListItem>
            );
          })}
        </ScrollView>
        <View>
          {this.state.isFetching ? (
            <Button block style={styles.btn}>
              <Spinner color="#FFF" />
            </Button>
          ) : (
            <Button block style={styles.btn} onPress={this.handleVote}>
              <Text style={styles.TextButton}>VOTAR</Text>
            </Button>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  texto: {
    color: "#212121",
    fontSize: 16,
    marginBottom: 10
  },
  item: {
    marginLeft: 10,
    marginRight: 10,
    paddingRight: 0
  },
  input: {
    margin: 10,
    marginTop: 0,
    marginLeft: 10,
    backgroundColor: "#FAFAFA"
  },
  StyleView: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)"
  },
  btn: {
    backgroundColor: "#f73131",
    margin: 10,
    marginTop: 10,
    marginBottom: 20
  },
  TextButton: {
    color: "white",
    fontWeight: "bold"
  }
});
