import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Dados de exemplo para o card. Mais tarde, virão da nossa API.
export default function PacienteCard({ nome, cpf, idade, telefone, convenio, sexo, dataCadastro }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.patientName}>{nome}</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Ionicons name="eye-outline" size={24} color="#555" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="create-outline" size={24} color="#555" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.infoText}><Text style={styles.bold}>CPF:</Text> {cpf}</Text>
        <Text style={styles.infoText}><Text style={styles.bold}>Idade:</Text> {idade}</Text>
        <Text style={styles.infoText}><Text style={styles.bold}>Telefone:</Text> {telefone}</Text>
        <Text style={styles.infoText}><Text style={styles.bold}>Convênio:</Text> {convenio}</Text>
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{sexo}</Text>
        </View>
        <Text style={styles.footerText}>Cadastrado em {dataCadastro}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  patientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  cardBody: {
    marginBottom: 15,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
  bold: {
    fontWeight: 'bold',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 15,
  },
  tag: {
    backgroundColor: '#e9ecef',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#495057',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
  },
});