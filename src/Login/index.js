import React from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style'

export default class Login extends React.Component {
  state: {
    username: String,
    password: String
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text h4 style={{ fontWeight: 'bold' }}>Registro de Ocorrências</Text>
        <View style={styles.inputContainer}>
          <Input placeholder="Email" onChangeText={ value => this.setState({username: value}) }/>
          <Input placeholder="Senha" secureTextEntry onChangeText={ value => this.setState({password: value}) }/>
          <Button onPress={() => console.log(this.state)} title="Login" ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ['#6C92F4', '#1A73E9'],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 0 }
            }}
            buttonStyle={styles.logButton} />
          <Button title="ESQUECI MINHA SENHA" type="outline" buttonStyle={styles.FPButton} titleStyle={styles.FPtitle} />
        </View>
      </View>
    );
  }
}