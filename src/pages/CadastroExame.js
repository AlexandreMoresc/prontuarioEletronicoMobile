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


const CadastroExameScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#16a085" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cadastro de Exames</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          {/* Campo Nome do Exame */}
          <Text style={styles.label}>Nome do Exame:</Text>
          <TextInput style={styles.input} placeholder="Glicose" />

          {/* Campo Descrição */}
          <Text style={styles.label}>Descrição:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="exemplo..."
            multiline
            numberOfLines={4}
          />

          {/* Botões de Ação */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
              <Text style={styles.secondaryButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.primaryButton]}>
              <Text style={styles.primaryButtonText}>Cadastrar Exame</Text>
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
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
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
    height: 50,
    fontSize: 16,
    marginBottom: 15,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
    paddingTop: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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
    backgroundColor: '#27ae60',
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

export default CadastroExameScreen;