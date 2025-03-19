import React from "react";
import { View, Text, Button, Image, BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../assets/logo.png"; // Importando a logo

export default function Menu() {
  const navigation = useNavigation();

  // Função para sair do aplicativo
  const sairDoApp = () => {
    BackHandler.exitApp(); // Fecha o aplicativo
  };

  return (
    <View style={styles.container}>
      {/* Logo no topo */}
      <Image source={Logo} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>Menu Principal</Text>

      {/* Botões Voltar e Sair na parte inferior */}
      <View style={styles.botaoContainer}>
        <View style={styles.botao}>
          <Button
            title="Voltar"
            onPress={() => navigation.goBack()}
            color="blue"
          />
        </View>
        <View style={styles.botao}>
          <Button title="Sair" onPress={sairDoApp} color="red" />
        </View>
      </View>
    </View>
  );
}

// Estilos
const styles = {
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    paddingTop: 50,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 30,
  },
  botaoContainer: {
    flexDirection: "row", // Alinha os botões lado a lado
    position: "absolute",
    bottom: 20,
    width: "80%",
    justifyContent: "space-between",
  },
  botao: {
    width: "45%", // Define a largura dos botões
  },
};
