import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ExameCard = ({ nome, descricao }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.exameName}>{nome}</Text>
        <Text style={styles.exameDescription}>{descricao}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={24} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  cardContent: {
    flex: 1,
  },
  exameName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  exameDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 15,
  },
});

export default ExameCard;