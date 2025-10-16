import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import PacientesScreen from './src/pages/Pacientes';
import CadastroPacienteScreen from './src/pages/CadastroPaciente';
import CadastroExame from './src/pages/CadastroExame'; 
import Requisicoes from './src/pages/Requisicoes';   
import NovaRequisicaoScreen from './src/pages/NovaRequisicao'; 
import ExamesScreen from './src/pages/Exames';
import ResultadosScreen from './src/pages/Resultados';
import LancarResultadoScreen from './src/pages/LancarResultado';
import LoginScreen from './src/pages/Login';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pacientes" component={PacientesScreen} />
        <Stack.Screen name="CadastroPaciente" component={CadastroPacienteScreen} />
        <Stack.Screen name="CadastroExame" component={CadastroExame} /> 
        <Stack.Screen name="Requisicoes" component={Requisicoes} />
        <Stack.Screen name="NovaRequisicao" component={NovaRequisicaoScreen} />
        <Stack.Screen name="Exames" component={ExamesScreen} />
        <Stack.Screen name="Resultados" component={ResultadosScreen} />
        <Stack.Screen name="LancarResultado" component={LancarResultadoScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}