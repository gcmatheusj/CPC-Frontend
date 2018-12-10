import React, { Component } from "react";
import { View, Image, StyleSheet, AsyncStorage } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import { Spinner } from "native-base";
import { Constants } from "expo";
import Imagem from "../../../assets/logo.png";

export default class PreloadScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: ""
    };
  }

  componentDidMount() {
    this.verifyUserLoggedIn();
    //AsyncStorage.removeItem('jwt')
  }

  componentDidUpdate() {
    this.handleChangeScreen();
  }

  //Action no Redux
  verifyUserLoggedIn = () => {
    AsyncStorage.getItem("jwt").then(jwt => {
      if (jwt !== null && jwt !== "") {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  };

  //Action no Redux
  handleChangeScreen = () => {
    if (this.state.isLoggedIn === true) {
      setTimeout(() => {
        //Faz um reset no histórico, impossibilitando o usuário voltar para o preload.
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Home" })]
        });
        this.props.navigation.dispatch(resetAction);
      }, 3000);
    } else if (this.state.isLoggedIn === false) {
      setTimeout(() => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Auth" })]
        });

        this.props.navigation.dispatch(resetAction);
      }, 3000);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.statusBar} />
        </View>
        <View style={styles.content}>
          <Image source={Imagem} style={styles.logoImagem} />
          <Spinner color="#2a80dd" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  statusBar: {
    backgroundColor: "#212121",
    height: Constants.statusBarHeight
  },
  logoImagem: {
    height: 150,
    width: 350,
    marginTop: 20
  }
});
