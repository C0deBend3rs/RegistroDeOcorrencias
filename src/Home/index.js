import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import styles from './style';

export default class Home extends React.Component {
  state: {
    ocorrencias: Array,
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      ocorrencias: []
    }
  }

  async componentDidMount () {
    // Função que pega lista de ocorrências vai aqui
    // Por hora vamos fazer hardcoded mesmo

    await axios.get('http://localhost:3333/ocorrencias/user/' + this.props.route.params.userId)
      .then(res => {
        this.setState({ocorrencias: res.data})
      })
      .catch(err => alert("Erro ao acessar lista de ocorrências"))
  }

  render () {
    return (
      <View style={styles.container}>
        {this.state.ocorrencias.map((ocorr, key) => {
          return (
            <Button onPress={() => this.props.navigation.navigate('Ocorrencia', {ocorrId: ocorr.id, ocorrTitle: ocorr.titulo})} buttonStyle={styles.ocorrButton} type='outline' key={ocorr.id} title={ ocorr.titulo }/>
          )
        })}

        <LinearGradient style={styles.addButtonGrad}  colors={['#6C92F4', '#1A73E9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate('CriarOcorrencia', { userId: this.props.route.params.userId })}>
            <Icon name="plus" type="font-awesome-5" color="white" size="20px" />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    )
  }

}