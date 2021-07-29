import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'
import { TreeSelect } from 'antd'
import styles from './style'

const data = [
  {
  title: 'Teste',
  value: '1',
    children: [
      {
        title: 'Sou o filhinho',
        value: '2'
      }
    ]
  }
]

export default class CriarOcorrencia extends React.Component {
  state: {
      ocorrencia: Object
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      ocorrencia: {
        titulo: '',
        desc: '',
        prioridade: null,
        local: null
      }
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.inputDiv}>
          <Input containerStyle={styles.inputBox} inputContainerStyle={styles.inputContainer} labelStyle={styles.label} label="Título"/>
          <Input multiline containerStyle={styles.inputBox} inputContainerStyle={styles.inputContainer} inputStyle={{ height: '100px' }} labelStyle={styles.label} label="Descrição" />
          <TreeSelect treeData={data} />
        </View>

        <View style={styles.buttonsDiv}>
          <View style={styles.photosButtons}>
            <LinearGradient style={styles.buttonGrad}  colors={['#6C92F4', '#1A73E9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('CriarOcorrencia')}>
              <Icon name="paperclip" type="font-awesome-5" color="white" size="20px" />
            </TouchableOpacity>
            </LinearGradient>
            <LinearGradient style={styles.buttonGrad}  colors={['#6C92F4', '#1A73E9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('CriarOcorrencia')}>
              <Icon name="camera" type="font-awesome-5" color="white" size="20px" />
            </TouchableOpacity>
            </LinearGradient>
          </View>
          <Button title="Criar ocorrência" ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ['#6C92F4', '#1A73E9'],
                start: { x: 0, y: 0 },
                end: { x: 1, y: 0 }
              }}
              buttonStyle={{width: '95vw', borderRadius: '10px'}} />
        </View>
      </View>
    )
  }

}