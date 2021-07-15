import React from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style'

export default function Login () {
  return (
    <View style={styles.container}>
      <Text h3>Registro de Ocorrências</Text>
      <View style={styles.inputContainer}>
        <Input placeholder="Email"/>
        <Input placeholder="Senha" />
        <Button title="Login" ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#6C92F4', '#1A73E9'],
            start: { x: 0, y: 0 },
            end: { x: 1, y: 0 }
          }}
          buttonStyle={styles.logButton} />
        <Button title="ESQUECI MINHA SENHA" type="outline" buttonStyle={styles.FPButton} titleStyle={ styles.FPtitle }/>
      </View>
    </View>
  );
}