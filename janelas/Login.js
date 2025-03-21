import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { db } from "../janelas/firebaseConfig"; // Importando a configuração do Firebase
import { collection, getDocs, query, where } from "firebase/firestore"; // Funções do Firestore
import Logo from "../assets/logo.png"; // Importando a logo

export default function Login() {
  // Estados para armazenar e-mail e senha digitados pelo usuário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  // Função para verificar login no Firestore
  const verificarLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      // Cria uma consulta para buscar o usuário com o e-mail e senha informados
      const q = query(
        collection(db, "clientes"),
        where("email", "==", email),
        where("senha", "==", senha)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Se encontrar um usuário correspondente, faz o login
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        navigation.navigate("Menu"); // Redireciona para o menu
      } else {
        // Caso contrário, exibe erro
        Alert.alert("Erro", "E-mail ou senha incorretos!");
      }
    } catch (error) {
      console.error("Erro ao verificar login:", error);
      Alert.alert("Erro", "Não foi possível realizar o login.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={Logo} style={styles.logo} resizeMode="contain" />

      {/* Título */}
      <Text style={styles.title}>Login</Text>

      {/* Campo de E-mail */}
      <TextInput
        placeholder="E-mail"
        placeholderTextColor="gray"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Campo de Senha */}
      <TextInput
        placeholder="Senha"
        placeholderTextColor="gray"
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      {/* Botão de Login */}
      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={verificarLogin} color="green" />
      </View>

      {/* Botão para Cadastro */}
      <View style={styles.buttonContainer}>
        <Button
          title="Cadastro"
          onPress={() => navigation.navigate("OpcoesCadastro")}
          color="blue"
        />
      </View>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
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
    fontSize: 20,
    marginBottom: 20,
    color: "white",
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 15,
    padding: 5,
    color: "white",
  },
  buttonContainer: {
    width: "80%",
    marginBottom: 15,
  },
});
