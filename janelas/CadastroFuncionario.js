import React from "react";
import { View, Text, Button, TextInput, Image } from "react-native";
import Logo from "../assets/logo.png"; // Importando a logo

export default function CadastroFuncionario({ navigation }) {
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

      {/* Título */}
      <Text style={{ fontSize: 20, marginBottom: 20, color: "white" }}>
        Cadastro de Funcionário
      </Text>

      {/* Campos de Cadastro */}
      <TextInput
        placeholder="Nome Completo"
        placeholderTextColor="gray"
        style={{
          width: "80%",
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          marginBottom: 15,
          padding: 5,
          color: "white",
        }}
      />
      <TextInput
        placeholder="CPF"
        placeholderTextColor="gray"
        style={{
          width: "80%",
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          marginBottom: 15,
          padding: 5,
          color: "white",
        }}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Telefone"
        placeholderTextColor="gray"
        style={{
          width: "80%",
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          marginBottom: 15,
          padding: 5,
          color: "white",
        }}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Cargo"
        placeholderTextColor="gray"
        style={{
          width: "80%",
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          marginBottom: 20,
          padding: 5,
          color: "white",
        }}
      />

      {/* Botões Separados */}
      <View style={{ width: "80%", marginBottom: 15 }}>
        <Button
          title="Salvar Funcionário"
          onPress={() => alert("Funcionário cadastrado!")}
          color="green"
        />
      </View>
      <View style={{ width: "80%" }}>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          color="red"
        />
      </View>
    </View>
  );
}
