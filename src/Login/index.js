import React from 'react';
import { Text, View } from 'react-native';
import {Input, Button} from 'react-native-elements'
import styles from './style'

export default function Login () {
  return (
    <View style={styles.container}>
      <Text>Registro de ocorrências</Text>
      <View style={styles.inputContainer}>
        <Input placeholder="Email"/>
        <Input placeholder="Senha" />
        <Button title="Login"/>
        <Button title="Esqueci minha senha" type="outline" buttonStyle={styles.FPButton} titleStyle={ styles.FPtitle }/>
      </View>
    </View>
  );
}