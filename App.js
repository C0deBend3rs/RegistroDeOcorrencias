import React from 'react';
import Login from './src/Login';
import Home from './src/Home';
import CriarOcorrencia from './src/CriarOcorrencia';
import Ocorrencia from './src/VerOcorrencia';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator()

const CustomHeader = () => <LinearGradient style={{ flex: 1 }} colors={['#6C92F4', '#1A73E9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />

const LogoutButton = () => <TouchableOpacity><Icon/></TouchableOpacity>

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: true, headerTitle: "OcorrĂȘncias", headerBackground: CustomHeader, headerTintColor: "#fff" }}/>
          <Stack.Screen name="Ocorrencia" component={Ocorrencia} options={ ({route}) => ({ headerShown: true, headerTitle: route.params.ocorrTitle, headerStyle: { backgroundColor: 'white' }, headerTransparent: true, headerTintColor: "black", headerTitleAlign: 'center' })}/>
          <Stack.Screen name="CriarOcorrencia" component={CriarOcorrencia} options={{ headerShown: true, headerTitle: "Nova ocorrĂȘncia", headerStyle: { backgroundColor: 'white' }, headerTransparent: true, headerTintColor: "black", headerTitleAlign: 'center' }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}