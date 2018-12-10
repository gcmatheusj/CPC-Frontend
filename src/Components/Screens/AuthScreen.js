import React, { Component } from "react";
import { StyleSheet, Text, View, Image, AsyncStorage, Alert, KeyboardAvoidingView, ScrollView } from "react-native";
import { Button, Input, Form, Item, Container, Spinner } from "native-base";
import { NavigationActions, StackActions } from "react-navigation";
import Imagem from "../../../assets/logo.png";
import { Constants } from "expo-constants";
import axios from "axios";


export default class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLoggedIn: "",
      isFetching: false,
    };
  }

  componentDidUpdate() {
    this.handleChangeScreen();
  }

  //Action no Redux.
  currentUser = user => {
    AsyncStorage.setItem("user", user);
  };

  //Action no Redux
  sendToken = token => {
    AsyncStorage.setItem("jwt", token);
  };

  //Action no Redux
  handleChangeScreen = () => {
    if (this.state.isLoggedIn === true) {
      //Faz um reset no histórico, impossibilitando o usuário voltar para o preload.
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Home" })]
      });

      this.props.navigation.dispatch(resetAction);
    }
  };

  //Action no Redux.
  signUp = () => {
    this.setState({ isFetching: true });
    axios
      .post("https://cpc-backend.herokuapp.com/auth/register", {
        name: this.state.user.nome,
        cpf: this.state.user.cpf,
        email: this.state.user.email
      })
      .then(res => {
        if(res.data.error === 'invalid email'){
          this.setState({ isFetching: false });
          Alert.alert(
            "Erro",
            "Email inválido.",
            [
              { text: "Ok" }
            ],
            { cancelable: false }
          );
        }else if(res.data.error === 'invalid fields'){
          this.setState({ isFetching: false });
          Alert.alert(
            "Erro",
            "Preencha todos os campos.",
            [
              { text: "Ok" }
            ],
            { cancelable: false }
          );
        } else if (res.data.error === "User already exists") {
          this.setState({ isFetching: false });
          Alert.alert(
            "Erro",
            "Email já cadastrado.",
            [
              { text: "Ok" }
            ],
            { cancelable: false }
          );
        } else if(res.data.error === 'CPF already exists') {
          this.setState({ isFetching: false });
          Alert.alert(
            "Erro",
            "CPF já cadastrado.",
            [
              { text: "Ok" }
            ],
            { cancelable: false }
          );
        } else if (res.data.error === "invalid cpf") {
          this.setState({ isFetching: false });
          Alert.alert(
            "Erro",
            "CPF inválido.",
            [
              { text: "Ok" }
            ],
            { cancelable: false }
          );
        } else if (!res.data.error) {
          const user = res.data.user.name;
          const token = res.data.token;

          this.sendToken(token);
          this.currentUser(user);
          this.setState({ isLoggedIn: true });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  //Action no Redux.
  handleChangeNome = nome => {
    this.setState({ user: { ...this.state.user, nome: nome } });
  };

  //Action no Redux.
  handleChangeCpf = cpf => {
    this.setState({ user: { ...this.state.user, cpf: cpf } });
  };

  //Action no Redux.
  handleChangeEmail = email => {
    this.setState({ user: { ...this.state.user, email: email } });
  };

  render() {
    return (
      <View style={styles.container}>
      <View>
        <View style={styles.statusBar} />
      </View>
      <View style={styles.logoContainer}>
        <Image source={Imagem} style={styles.logoImagem} />
      </View>
      <KeyboardAvoidingView style={{ flex: 1}} behavior="padding">
      <ScrollView>
      <View style={styles.groupInfo}>
        <Text style={styles.textInfo2}>Insira os dados abaixo:</Text>
      </View>
      
        
          <Item regular style={styles.input}>
            <Input
              selectionColor="#2a80dd"
              placeholder="Nome"
              autoCorrect={false}
              onChangeText={this.handleChangeNome}
            />
          </Item>
          <Item regular style={styles.input}>
            <Input
              mask={""}
              selectionColor="#2a80dd"
              placeholder="CPF"
              autoCorrect={false}
              onChangeText={this.handleChangeCpf}
            />
          </Item>
          <Item regular style={styles.input}>
            <Input
              selectionColor="#2a80dd"
              placeholder="E-Mail"
              autoCorrect={false}
              onChangeText={this.handleChangeEmail}
            />
          </Item>
          <Button
            block
            success
            style={styles.btnEntrar}
            onPress={this.signUp}
          >
            {this.state.isFetching ? (
              <Spinner color="#fff" />
            ) : (
              <Text style={styles.labelBtn}>ENTRAR</Text>
            )}
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  statusBar: {
    backgroundColor: "#212121",
    height: Constants.statusBarHeight
  },
  logoContainer: {
    alignItems: "center"
  },
  logoImagem: {
    height: 150,
    width: 350,
    marginTop: 20
  },
  groupInfo: {
    justifyContent: "center",
    alignItems: "flex-start"
  },
  contentForm: {
    paddingBottom: 20
  },
  textInfo1: {
    fontSize: 30,
    margin: 15
  },
  textInfo2: {
    marginTop: 20,
    fontSize: 18,
    color: "#424242",
    margin: 10
  },
  input: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#FAFAFA"
  },
  styleTextInput: {
    width: 300,
    height: 40
  },
  btnEntrar: {
    backgroundColor: "#2a80dd",
    margin: 10
  },
  labelBtn: {
    color: "white",
    fontWeight: "bold"
  }
});
