import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList, 
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PacienteCard from '../components/PacienteCard'; // Importa o nosso novo componente
import { useNavigation } from '@react-navigation/native';

// Vamos simular uma lista de pacientes. Se a lista estiver vazia, mostraremos a outra tela.
const DADOS_EXEMPLO = [
  {
    id: '1',
    nome: 'Luiza',
    cpf: '123.456.789-00',
    idade: '21 anos',
    telefone: '(11) 98765-4321',
    convenio: 'Hospitalar',
    sexo: 'Feminino',
    dataCadastro: '08/09/2025',
  },
 
];

const PacientesScreen = () => {
  
  const [pacientes, setPacientes] = useState(DADOS_EXEMPLO);
  const navigation = useNavigation();

  // Componente para a tela quando a lista de pacientes está vazia
const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Nenhum paciente cadastrado</Text>
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('CadastroPaciente')}
      >
        <Text style={styles.primaryButtonText}>Cadastrar Primeiro Paciente</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#16a085" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pacientes</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por nome, CPF ou telefone..."
          />
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('CadastroPaciente')}
        >
          <Ionicons name="add" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={pacientes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PacienteCard {...item} />}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={renderEmptyList}
      />
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
  searchContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    borderRadius: 25,
    height: 50,
  },
  searchIcon: {
    paddingLeft: 15,
  },
  searchInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#27ae60',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  listContainer: {
    padding: 15,
  },
  // Estilos para a tela vazia
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#27ae60',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PacientesScreen;