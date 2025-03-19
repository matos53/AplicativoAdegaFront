import React from "react";
import { View, Text, Button, TextInput, Image } from "react-native";
import Logo from "../assets/logo.png"; // Importando a logo

export default function CadastroCliente({ navigation }) {
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
        Cadastro de Cliente
      </Text>

      {/* Campos de Cadastro */}
      <TextInput
        placeholder="Nome do Cliente"
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
        placeholder="Email"
        placeholderTextColor="gray"
        style={{
          width: "80%",
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          marginBottom: 15,
          padding: 5,
          color: "white",
        }}
        keyboardType="email-address"
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
        placeholder="Senha"
        placeholderTextColor="gray"
        style={{
          width: "80%",
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          marginBottom: 15,
          padding: 5,
          color: "white",
        }}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Endereço"
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
        placeholder="Data de Nascimento (DD/MM/AAAA)"
        placeholderTextColor="gray"
        style={{
          width: "80%",
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          marginBottom: 20,
          padding: 5,
          color: "white",
        }}
        keyboardType="numeric"
      />

      {/* Botões Separados */}
      <View style={{ width: "80%", marginBottom: 15 }}>
        <Button
          title="Salvar Cliente"
          onPress={() => alert("Cliente cadastrado!")}
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
