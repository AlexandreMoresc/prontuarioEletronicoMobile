// src/pages/LancarResultado.js

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const LancarResultadoScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#16a085" />

      {/* Cabeçalho Personalizado */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Lançar Resultado</Text>
        </View>
       
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          {/* Seletor de Requisição (simulado) */}
          <Text style={styles.label}>Requisição:</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownPlaceholder}>Selecione uma requisição</Text>
            <Ionicons name="chevron-down" size={20} color="#888" />
          </TouchableOpacity>
          <Text style={styles.helperText}>
            Nenhuma requisição disponível para lançamento de resultado.
          </Text>

          {/* Campo Resultado */}
          <Text style={styles.label}>Resultado:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o resultado do exame"
          />

          {/* Campo Observações */}
          <Text style={styles.label}>Observações:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Observações adicionais sobre o resultado (opcional)"
            multiline
            numberOfLines={4}
          />

          {/* Botões de Ação */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
              <Text style={styles.secondaryButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.primaryButton]}>
              <Text style={styles.primaryButtonText}>Lançar Resultado</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  header: {
    backgroundColor: '#27ae60',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  adminText: {
    color: '#fff',
    fontSize: 14,
  },
  scrollContainer: {
    padding: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
    paddingHorizontal: 15,
    fontSize: 16,
    height: 50,
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 15,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
    paddingHorizontal: 15,
    height: 50,
  },
  dropdownPlaceholder: {
    fontSize: 16,
    color: '#aaa',
  },
  helperText: {
    fontSize: 12,
    color: '#888',
    marginTop: -12,
    marginBottom: 20,
    marginLeft: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 15,
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#58D68D', 
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ced4da',
  },
  secondaryButtonText: {
    color: '#495057',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LancarResultadoScreen;