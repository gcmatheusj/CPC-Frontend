import React, { Component } from "react"
import { Image, StyleSheet } from "react-native"
import { Icon, Container, Form, Text, Header, View } from "native-base"
import imagem from "../../../assets/logo.png"

export default class SobreScreen extends Component {

    static navigationOptions = {
        title: "Sobre",
        headerTintColor: '#282f3e',
        headerStyle: {
            backgroundColor: '#BDBDBD'
        },
        drawerIcon: () => <Icon name="information-circle" />,
    }

    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.viewImagem}>
                    <Image source={imagem} style={styles.styleImagem}/>
                </View>
                <Form style={styles.containerText}>
                    <Text style={styles.text} >
                        O Circuito Penedo de Cinema é o aplicativo que permite votar nos filmes
                        das categorias apresentadas no festival. Escolha seus filmes favoritos e
                        fique na torcida! O resultado será apresentado durante o dia de encerramento do evento!
                    </Text>
                </Form>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerText: {
        flex: 1,
        height: 100,
        padding: 20
    },
    text: {
        fontSize: 15,
        textAlign: "justify"
    },
    viewImagem: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30
    },
    styleImagem: {
        width: 250,
        height: 125,
    }
})