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
import RequisicaoCard from '../components/RequisicaoCard';
import { useNavigation } from '@react-navigation/native';

export default function RequisicoesScreen() {
  const navigation = useNavigation();
  const [requisicoes, setRequisicoes] = useState([
    {
      id: '1',
      paciente: 'Luiza',
      exame: 'Hemograma Completo',
      status: 'Solicitado',
      dataSolicitacao: '08/09/2025',
    },
    {
      id: '2',
      paciente: 'Luiza',
      exame: 'Glicose',
      status: 'Solicitado',
      dataSolicitacao: '08/09/2025',
    },
  ]);

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Nenhuma requisição cadastrada</Text>
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('NovaRequisicao')}
      >
        <Text style={styles.primaryButtonText}>Criar Primeira Requisição</Text>
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
        <Text style={styles.headerTitle}>Requisições</Text>
      </View>

      <View style={styles.controlsContainer}>
        <View style={styles.searchRow}>
          <View style={styles.searchInputWrapper}>
            <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar por paciente ou exame..."
            />
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('NovaRequisicao')}
          >
            <Ionicons name="add" size={28} color="#fff" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Todos Status</Text>
          <Ionicons name="chevron-down" size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={requisicoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RequisicaoCard {...item} />}
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
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#2ecc71',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    flex: 1,
  },
  controlsContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    borderRadius: 8,
    height: 50,
    paddingLeft: 10,
  },
  searchIcon: {
    marginRight: 8,
    paddingLeft: 6,
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
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  listContainer: {
    padding: 15,
  },
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