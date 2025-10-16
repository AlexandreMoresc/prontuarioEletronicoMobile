// src/pages/Login.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
    const navigation = useNavigation();
  // useState para controlar a visibilidade da senha
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E8F8F5" />
      {/* KeyboardAvoidingView ajuda a não esconder os inputs atrás do teclado */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.card}>
          {/* Ícone Principal */}
          <View style={styles.iconContainer}>
            <Ionicons name="document-text-outline" size={32} color="#fff" />
          </View>

          <Text style={styles.title}>Prontuário Eletrônico</Text>
          <Text style={styles.subtitle}>Faça login para acessar o sistema</Text>

          {/* Campo de Usuário */}
          <Text style={styles.label}>Usuário</Text>
          <TextInput style={styles.input} placeholder="Digite seu usuário" />

          {/* Campo de Senha com Ícone */}
          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Digite sua senha"
              secureTextEntry={!senhaVisivel} // A visibilidade depende do estado
            />
            <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
              <Ionicons
                name={senhaVisivel ? 'eye-off-outline' : 'eye-outline'}
                size={24}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          {/* Botão de Entrar */}
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          {/* Credenciais de Demonstração */}
          <View style={styles.demoContainer}>
            <Text style={styles.demoText}>Credenciais de demonstração:</Text>
            <Text style={styles.demoText}>
              Usuário: <Text style={styles.demoBold}>admin</Text>
            </Text>
            <Text style={styles.demoText}>
              Senha: <Text style={styles.demoBold}>123456</Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F8F5', // Verde bem claro do fundo
    justifyContent: 'center',
    padding: 20,
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    elevation: 5,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#27ae60',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
    marginBottom: 15,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#27ae60',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  loginButtonText: {
    color: '#212529',
    fontSize: 16,
    fontWeight: 'bold',
  },
  demoContainer: {
    alignItems: 'center',
  },
  demoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  demoBold: {
    fontWeight: 'bold',
    color: '#27ae60',
  },
});

export default LoginScreen;