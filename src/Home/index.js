import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './style'

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

  componentDidMount () {
    // Função que pega lista de ocorrências vai aqui
    // Por hora vamos fazer hardcoded mesmo
    const hardcodedOcorr = [
      {
        titulo: 'teste0'
      },
      {
        titulo: 'teste1'
      },
      {
        titulo: 'teste2'
      },
      {
        titulo: 'teste3'
      },
      {
        titulo: 'teste5'
      },
      {
        titulo: 'teste6'
      },
      {
        titulo: 'teste7'
      },
      {
        titulo: 'teste8'
      },
      {
        titulo: 'teste9'
      }
    ]

    this.setState({ocorrencias: hardcodedOcorr})
  }

  render () {
    return (
      <View style={styles.container}>
        {this.state.ocorrencias.map((ocorr, key) => {
          return (
            <Button buttonStyle={styles.ocorrButton} type='outline' key={ocorr.titulo} title={ ocorr.titulo }/>
          )
        })}

        <LinearGradient style={styles.addButtonGrad}  colors={['#6C92F4', '#1A73E9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate('CriarOcorrencia')}>
            <Icon name="plus" type="font-awesome-5" color="white" size="20px" />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    )
  }

}