import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RequisicaoCard({ paciente, exame, status, dataSolicitacao }) {
  const statusColors = {
    Solicitado: { background: '#e7f3ff', text: '#007bff' },
    // Adicione outras cores para outros status se necessário
    // Ex: Finalizado: { background: '#d4edda', text: '#155724' },
  };

  const statusStyle = statusColors[status] || {};

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.patientName}>{paciente}</Text>
        <View style={[styles.statusTag, { backgroundColor: statusStyle.background }]}>
          <Text style={[styles.statusText, { color: statusStyle.text }]}>{status}</Text>
        </View>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.infoText}><Text style={styles.bold}>Exame:</Text> {exame}</Text>
        <Text style={styles.infoText}><Text style={styles.bold}>Solicitado em:</Text> {dataSolicitacao}</Text>
      </View>
      <View style={styles.cardFooter}>
        <TouchableOpacity>
          <Ionicons name="eye-outline" size={24} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={24} color="#555" />
        </TouchableOpacity>
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
    marginBottom: 10,
  },
  patientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statusTag: {
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  cardBody: {
    marginBottom: 10,
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 10,
    marginTop: 5,
    gap: 20,
  },
});