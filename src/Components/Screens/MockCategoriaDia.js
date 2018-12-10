import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Content, ListItem, Left, Right, Radio } from "native-base";

export default class MockCategoriaDia extends Component {
  constructor(props){
    super(props)
    this.state = {
      movieSelected: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
            <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                margin: 10,
                borderBottomWidth: 1,
                borderBottomColor: "rgba(0,0,0,0.2)"
            }}
            >
            <Text style={styles.texto}>Selecione um dos filmes abaixo:</Text>
            </View>
        </View>
        <Content>
          <ListItem>
            <Left>
              <Text>Filme 1</Text>
            </Left>
            <Right>
              <Radio 
                onPress={() => { this.setState({ movieSelected: 'movieOne'})}} 
                selected={this.state.movieSelected === 'movieOne'} 
                selectedColor='#f73131'
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Filme 2</Text>
            </Left>
            <Right>
              <Radio 
                onPress={() => { this.setState({ movieSelected: 'movieTwo'})}} 
                selected={this.state.movieSelected === 'movieTwo'} 
                selectedColor='#f73131'
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Filme 3</Text>
            </Left>
            <Right>
              <Radio 
                onPress={() => { this.setState({ movieSelected: 'movieThree'})}} 
                selected={this.state.movieSelected === 'movieThree'} 
                selectedColor='#f73131'
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Filme 4</Text>
            </Left>
            <Right>
              <Radio 
                onPress={() => { this.setState({ movieSelected: 'movieFor'})}} 
                selected={this.state.movieSelected === 'movieFor'} 
                selectedColor='#f73131' 
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Filme 5</Text>
            </Left>
            <Right>
              <Radio 
                onPress={() => { this.setState({ movieSelected: 'movieFive'})}} 
                selected={this.state.movieSelected === 'movieFive'} 
                selectedColor='#f73131' 
              />
            </Right>
          </ListItem>
        </Content>
        <View>
            <Button block 
              style={styles.btn} 
              onPress={() => this.props.navigation.navigate('VotoCadastrado')}>
              <Text style={styles.TextButton}>VOTAR</Text>
            </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    color: "#212121",
    fontSize: 16,
    marginBottom: 10
  },
  btn: {
    backgroundColor: '#f73131', 
    margin: 10, 
    marginBottom: 20
  },
  TextButton: {
    color: 'white', 
    fontWeight: 'bold'
  }
});
