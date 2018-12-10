import React, { Component } from "react"
import { Container, Label, Content, Icon } from 'native-base';
import { StyleSheet, View, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Constants } from "expo";

import location from "../../../assets/location.png"

export default class ProgramacaoScreen extends Component {

    static navigationOptions = {
        title: 'Programação',
        headerTintColor: '#282f3e',
        headerStyle: {
            backgroundColor: '#BDBDBD'
        },
        drawerIcon: () => <Icon name="calendar" />,
    }

    render() {
        return (
            <Container style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.title}>
                    <Label style={styles.label}>Confira toda a nossa programação</Label>
                </View>
                
                    {/*Segunda*/}
                    <View style={styles.color1}>
                        <Label style={styles.labelDay}>SEGUNDA 26/11</Label>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>Cerimônia de Abertura Oficial do Circuito</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>19h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Mostra de Longa Metragem Nacional: Para Minha Amada Morte
                                </Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>19h30</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                    </View>

                    {/*Terça*/}
                    <View style={styles.color2}>
                        <Label style={styles.labelDay}>TERÇA 27/11</Label>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Mostra de Cinema Infantil</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>08h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <Label style={styles.labelTexto}>
                            Oficina de Produção de Vídeo com Alberto Casa Grande</Label>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>09h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>CEU</Label>
                        </View>
                        <Label style={styles.labelTexto}>
                            Oficina de Direção de Atores para Cinema e Televisão com Ninho Moraes</Label>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>09h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Círculo Operário</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Mostra do Velho Chico de Cinema Ambiental: Mostra Competitiva</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>14h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Festival de Cinema Universitário: Mostra Competitiva</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>19h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Mostra de Longa Metragem Nacional: Pagliacci
                                </Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>21h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                PROGRAMAÇÃO CULTURAL: Clowns de Quinta
                            </Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>23h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Praça 12 de Abril</Label>
                            <Label style={styles.descricaolabel}></Label>
                        </View>
                    </View>

                    {/*Quarta*/}
                    <View style={styles.color1}>
                        <Label style={styles.labelDay}>QUARTA 28/11</Label>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Mostra de Cinema Infantil</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>08h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <Label style={styles.labelTexto}>
                            Oficina de  Produção de Vídeo com Alberto Casa Grande</Label>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>09h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>CEU</Label>
                        </View>
                        <Label style={styles.labelTexto}>
                            Oficina de Direção de Atores para Cinema e Televisão com Ninho Moraes</Label>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>09h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Círculo Operário</Label>
                        </View>
                        <Label style={styles.labelTexto}>
                            Oficina de Fotografia no Cinema com Fernanda Tanaka</Label>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>09h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Casa do Patrimônio</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Mostra do Velho Chico de Cinema Ambiental: Mostra Competitiva</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>14h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <Label style={styles.labelTexto}>
                            Workshop "Feito a Mão - Retalhando e Bordando"</Label>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>14h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Casa da Amizade</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Bate Papo com Realizadores</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>16h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Mirante Forte Mauricio de  Nassau</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Festival de Cinema Universitário: Mostra Competitiva</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>19h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Mostra Sururu de Cinema Alagoano
                        </Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>21h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                PROGRAMAÇÃO CULTURAL: Espaço de Dança Ítalo Miguel (Dança de Salão)
                            </Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>23h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Praça 12 de Abril</Label>
                        </View>
                    </View>

                    {/*Quinta*/}
                    <View style={styles.color2}>
                        <Label style={styles.labelDay}>QUINTA 29/11</Label>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Mostra de Cinema Infantil</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>08h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <Label style={styles.labelTexto}>
                            Oficina de Produção de Vídeo com Alberto Casa Grande</Label>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>09h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>CEU</Label>
                        </View>
                        <Label style={styles.labelTexto}>
                            Oficina de Direção de Atores para Cinema e Televisão com Ninho Moraes</Label>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>09h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Círculo Operário</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Mostra do Velho Chico de Cinema Ambiental: Mostra Competitiva</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>14h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Conferência “Cinema e Educação”</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>14h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Casa do Patrimônio</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Bate Papo com Realizadores</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>16h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Mirante Forte Mauricio de Nassau</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Festival de Cinema Universitário: Mostra Competitiva</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>19h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Festival de Cinema Brasileiro de Penedo: Mostra Competitiva</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>21h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                PROGRAMAÇÃO CULTURAL: Batuque Mundaú
                            </Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>23h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Praça 12 de Abril</Label>
                        </View>
                    </View>

                    {/*Sexta*/}
                    <View style={styles.color1}>
                        <Label style={styles.labelDay}>SEXTA 30/11</Label>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                ManduCA - Mostra de Cinema Infantojuvenil de Cachoeira</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>08h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <Label style={styles.labelTexto}>
                            Oficina de Produção de Vídeo com Alberto Casa Grande</Label>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>09h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>CEU</Label>
                        </View>
                        <Label style={styles.labelTexto}>
                            Oficina de Direção de Atores para Cinema e Televisão com Ninho Moraes</Label>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>09h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Círculo Operário</Label>
                        </View>
                        <Label style={styles.labelTexto}>
                            Oficina de Fotografia no Cinema com Fernanda Tanaka</Label>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>09h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Casa do Patrimônio</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Mostra EGBÉ de Cinema Negro</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>14h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Conferência "Cinematográfia Subaquática"</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>14h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Câmara de Vereadores</Label>
                        </View>
                        
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Bate Papo com Realizadores</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>16h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Mirante Forte Mauricio de Nassau</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Festival de Cinema Brasileiro de Penedo: Mostra Competitiva</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>19h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Mostra de Longa Metragem Nacional: Todas as Razões Para Esquecer
                                </Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>21h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                PROGRAMAÇÃO CULTURAL: Zeza do Coco e Discotecagem
                            </Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>23h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Praça 12 de Abril</Label>
                        </View>
                    </View>

                    {/*Sábado*/}
                    <View style={styles.color2}>
                        <Label style={styles.labelDay}>SÁBADO 01/12</Label>
                        <Label style={styles.labelTexto}>
                            Apresentação dos Trabalhos Acadêmicos</Label>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>08h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Câmara de Vereadores</Label>
                        </View>
                        <Label style={styles.labelTexto}>
                            Apresentação do Planejamento Estratégico do Audiovisual Alagoano 2018-2020</Label>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>09h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>CEU</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                ManduCA - Mostra de Cinema Infantojuvenil de Cachoeira</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>14h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Conferência "A Sobrevivência das Imagens: Documentário e Didatura
                                Militar no Brasil"</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>14h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Câmara de Vereadores</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Bate Papo com Realizadores</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>16h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Mirante Forte Mauricio de  Nassau</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Festival de Cinema Brasileiro de Penedo: Mostra Competitiva</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>19h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Mostra de Longa Metragem Nacional: Beiço de Estrada
                                </Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>21h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                PROGRAMAÇÃO CULTURAL: Olha o Xote e Discotecagem
                            </Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>23h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Praça 12 de Abril</Label>
                        </View>
                    </View>

                    {/*Domingo*/}
                    <View style={styles.last}>
                        <Label style={styles.labelDay}>DOMINGO 02/12</Label>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Conferência "Economia Criativa e Mercado para o Audiovisual"</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>14h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Mostra de Longa Metragem Nacional: Menina de Barro
                                </Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>16h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Lançamento de Curtas de Turmas do MédioTec: ROTINA e A ÚLTIMA CARTA
                                </Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>18h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                Solenidade de Encerramento e Premiação
                                </Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>18h30</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Tenda na Praça 12 de Abril</Label>
                        </View>
                        <View style={styles.viewText}>
                            <Label style={styles.labelTexto}>
                                PROGRAMAÇÃO CULTURAL: Bob Lelis e a Rural do Forró e Discotecagem
                            </Label>
                        </View>
                        <View style={styles.viewText}>
                            <Ionicons name='md-time' size={16} style={styles.iconTime} />
                            <Label style={styles.descricaolabel}>23h</Label>
                            <Ionicons name='md-pin' size={16} style={styles.iconImage} />
                            <Label style={styles.descricaolabel}>Praça 12 de Abril</Label>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    scrollView:{
        
    },
    label: {
        color: "#212121",
        fontSize: 16,
        paddingTop: 0,
        padding: 10
    },
    title: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.2)"
    },
    descricaolabel: {
        fontSize: 15,
        marginBottom: 10,
        color: "white",
    },
    iconImage: {
        margin: 3,
        marginLeft: 20,
        color: "white",
    },
    primaryView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 35
    },
    viewText: {
        flex: 1,
        flexDirection: "row",
        maxWidth: "90%",
    },
    labelDay: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        padding: 5,
        textAlign: "center"
    },
    iconArrow: {
        marginLeft: 3,
        padding: 5
    },
    iconTime: {
        marginLeft: 3,
        padding: 3,
        paddingRight: 2,
        color: "white"
    },
    labelTexto: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 3,
        padding: 3,
        color: "white"
    },
    color1: {
        backgroundColor: "#1565C0",
        marginHorizontal: 10,
    },
    color2: {
        backgroundColor: "#1E88E5",
        marginHorizontal: 10,
    },
    last: {
        backgroundColor: "#1565C0",
        marginHorizontal: 10,
        marginBottom: 10
    }
})