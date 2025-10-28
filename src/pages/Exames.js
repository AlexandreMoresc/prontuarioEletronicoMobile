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
import ExameCard from '../components/ExameCard'; // Importa o nosso card
import { useNavigation } from '@react-navigation/native';

// Dados de exemplo para a lista
const DADOS_EXEMPLO = [
  { id: '1', nome: 'Glicose', descricao: 'Mede os níveis de açúcar no sangue.' },
  { id: '2', nome: 'Hemograma Completo', descricao: 'Análise completa das células sanguíneas.' },
  { id: '3', nome: 'Colesterol Total e Frações', descricao: 'Avalia os níveis de gordura no sangue.' },
];

export default function ExamesScreen() {
  const navigation = useNavigation();
  const [exames, setExames] = useState(DADOS_EXEMPLO);

  // Componente para a tela vazia
  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Nenhum exame cadastrado</Text>
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('CadastroExame')}
      >
        <Text style={styles.primaryButtonText}>Cadastrar Primeiro Exame</Text>
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
        <Text style={styles.headerTitle}>Exames</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Barra de Pesquisa e Botão Adicionar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por nome do exame..."
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('CadastroExame')}
          style={styles.addButton}
        >
          <Ionicons name="add" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={exames}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExameCard {...item} />}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={renderEmptyList}
      />
    </SafeAreaView>
  );
}

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
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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
  emptyContainer: {
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