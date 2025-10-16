
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Picker,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CadastroPacienteScreen = () => {
  const navigation = useNavigation();
  // Estados para cada campo
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [sexo, setSexo] = useState('Feminino');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [convenio, setConvenio] = useState('');
  const [observacoes, setObservacoes] = useState('');

  // Função para enviar para a API
  const handleCadastrar = async () => {
    const paciente = {
      nome,
      dataNascimento,
      cpf,
      sexo,
      telefone,
      email,
      endereco,
      convenio,
      observacoes,
    };

    try {
      const response = await fetch('https://sua-api.com/pacientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paciente),
      });
      if (response.ok) {
        Alert.alert('Sucesso', 'Paciente cadastrado!');
        // Limpa os campos
        setNome('');
        setDataNascimento('');
        setCpf('');
        setSexo('Feminino');
        setTelefone('');
        setEmail('');
        setEndereco('');
        setConvenio('');
        setObservacoes('');
      } else {
        Alert.alert('Erro', 'Falha ao cadastrar paciente.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro de conexão com a API.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#16a085" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cadastro de Pacientes</Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Nome Completo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome completo"
            value={nome}
            onChangeText={setNome}
          />
          <Text style={styles.label}>Data de Nascimento:</Text>
          <View style={styles.inputIconContainer}>
            <TextInput
              style={styles.inputWithIcon}
              placeholder="dd/mm/aaaa"
              value={dataNascimento}
              onChangeText={setDataNascimento}
            />
            <Ionicons
              name="calendar-outline"
              size={20}
              color="#888"
              style={styles.icon}
            />
          </View>
          <Text style={styles.label}>CPF:</Text>
          <TextInput
            style={styles.input}
            placeholder="000.000.000-00"
            keyboardType="numeric"
            value={cpf}
            onChangeText={setCpf}
          />
          <Text style={styles.label}>Sexo:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={sexo}
              style={styles.picker}
              onValueChange={setSexo}
            >
              <Picker.Item label="Feminino" value="Feminino" />
              <Picker.Item label="Masculino" value="Masculino" />
            </Picker>
          </View>
          <Text style={styles.label}>Telefone:</Text>
          <TextInput
            style={styles.input}
            placeholder="(00)00000-0000"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
          />
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="email@exemplo.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.label}>Endereço Completo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Rua, número, bairro, cidade, CEP"
            value={endereco}
            onChangeText={setEndereco}
          />
          <Text style={styles.label}>Observações Adicionais:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Observações adicionais"
            multiline
            numberOfLines={4}
            value={observacoes}
            onChangeText={setObservacoes}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={() => {
                setNome('');
                setDataNascimento('');
                setCpf('');
                setSexo('Feminino');
                setTelefone('');
                setEmail('');
                setEndereco('');
                setConvenio('');
                setObservacoes('');
              }}
            >
              <Text style={styles.secondaryButtonText}>Limpar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
              <Text style={styles.secondaryButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.primaryButton]}
              onPress={handleCadastrar}
            >
              <Text style={styles.primaryButtonText}>Cadastrar</Text>
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
  inputIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
    marginBottom: 15,
  },
  inputWithIcon: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  icon: {
    marginHorizontal: 15,
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
    marginBottom: 15,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
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
  pickerContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default CadastroPacienteScreen;