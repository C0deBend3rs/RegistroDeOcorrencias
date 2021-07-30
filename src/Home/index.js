import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, RefreshControl } from 'react-native';
import { Button, Icon, SpeedDial } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import styles from './style';

export default class Home extends React.Component {
  state: {
    ocorrencias: Array,
    refreshing: Boolean,
    sdOpen: Boolean
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      ocorrencias: [],
      refreshing: false,
      sdOpen: false
    }
  }

  async componentDidMount () {
    // Função que pega lista de ocorrências vai aqui
    // Por hora vamos fazer hardcoded mesmo

    await this.fetchList()
  }

  async fetchList () {
    this.setState({refreshing: true})

    await axios.get('http://localhost:3333/ocorrencias/user/' + this.props.route.params.userId)
      .then(res => {
        this.setState({ocorrencias: res.data})
      })
      .catch(err => alert("Erro ao acessar lista de ocorrências"))
  }

  render () {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={ this.state.refreshing }
            onRefresh={() => this.fetchList()}
          />
        }
      >
        {this.state.ocorrencias.map((ocorr, key) => {
          return (
            <Button onPress={() => this.props.navigation.navigate('Ocorrencia', {ocorrId: ocorr.id, ocorrTitle: ocorr.titulo})} buttonStyle={styles.ocorrButton} type='outline' key={ocorr.id} title={ ocorr.titulo }/>
          )
        })}

        
        <SpeedDial
          color="#1A73E9"
          icon={{ name: "bars", type: "font-awesome-5", color: "white", size: "24px" }}
          openIcon={{ name: "times", type: "font-awesome-5", color: "white", size: "24px" }}
          isOpen={this.state.sdOpen}
          onOpen={() => this.setState({ sdOpen: true })}
          onClose={() => this.setState({ sdOpen: false })}
        >
          <SpeedDial.Action
            color="#1A73E9"
            icon={{ name: "redo-alt", type: "font-awesome-5", color: "white", size: '20px' }}
            title="Atualizar"
            onPress={() => {this.fetchList(); this.setState({sdOpen: false})}}
          />
          <SpeedDial.Action
            color="#1A73E9"
            icon={{ name: "plus", type: "font-awesome-5", color: "white", size: '20px' }}
            title="Adicionar ocorrência"
            onPress={() => {this.props.navigation.navigate('CriarOcorrencia', { userId: this.props.route.params.userId }); this.setState({sdOpen: false})}}
          />
          </SpeedDial >

        {/* <LinearGradient style={styles.addButtonGrad}  colors={['#6C92F4', '#1A73E9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate('CriarOcorrencia', { userId: this.props.route.params.userId })}>
            <Icon name="plus" type="font-awesome-5" color="white" size="20px" />
          </TouchableOpacity>
        </LinearGradient> */}
      </ScrollView>
    )
  }

}