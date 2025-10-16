import { StyleSheet, View, Text } from "react-native";
import MenuItem from "../components/Menu";
import Header from "../components/Header";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Menu Principal</Text>
      <Text style={styles.subtitle}>Escolha um módulo para prosseguir</Text>
      <View style={styles.menuGrid}>
        <MenuItem
          iconName="person-add-outline"
          text="Pacientes"
          color="#007bff"
          onPress={() => navigation.navigate('Pacientes')}
        />
        <MenuItem
          iconName="flask-outline"
          text="Exames"
          color="#000000"
          onPress={() => navigation.navigate('Exames')}
        />
        <MenuItem
          iconName="document-text-outline"
          text="Resultados"
          color="#e74c3c"
          onPress={() => navigation.navigate('Resultados')} // Adicione navegação se quiser
        />
        <MenuItem
          iconName="clipboard-outline"
          text="Requisições"
          color="#f1c40f"
          onPress={() => navigation.navigate('Requisicoes')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    paddingTop: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  menuGrid: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
});