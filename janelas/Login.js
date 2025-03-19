import React, { useState } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../assets/logo.png"; // Importando a logo

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        paddingTop: 50,
      }}
    >
      {/* Logo Centralizada */}
      <Image
        source={Logo}
        style={{ width: 150, height: 150, marginBottom: 20 }}
        resizeMode="contain"
      />

      <Text style={{ fontSize: 20, marginBottom: 20, color: "white" }}>
        Login
      </Text>

      {/* Campos de Login */}
      <TextInput
        placeholder="E-mail"
        placeholderTextColor="gray"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor="gray"
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      {/* Botão Entrar */}
      <View style={{ width: "80%", marginBottom: 15 }}>
        <Button
          title="Entrar"
          onPress={() => navigation.navigate("Menu")}
          color="green"
        />
      </View>

      {/* Botão Cadastro */}
      <View style={{ width: "80%" }}>
        <Button
          title="Cadastro"
          onPress={() => navigation.navigate("OpcoesCadastro")}
          color="blue"
        />
      </View>
    </View>
  );
}

// Estilização dos Inputs
const styles = {
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 15,
    padding: 5,
    color: "white",
  },
};
