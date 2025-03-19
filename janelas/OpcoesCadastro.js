import React from "react";
import { View, Button, Text, Image } from "react-native";
import Logo from "../assets/logo.png"; // Importando a logo

export default function OpcoesCadastro({ navigation }) {
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
        Escolha uma opção de cadastro:
      </Text>

      {/* Botões Separados */}
      <View style={{ width: "80%", marginBottom: 15 }}>
        <Button
          title="Cadastrar Cliente"
          onPress={() => navigation.navigate("CadastroCliente")}
          color="gray"
        />
      </View>

      <View style={{ width: "80%", marginBottom: 15 }}>
        <Button
          title="Cadastrar Funcionário"
          onPress={() => navigation.navigate("CadastroFuncionario")}
          color="gray"
        />
      </View>

      <View style={{ width: "80%", marginBottom: 15 }}>
        <Button
          title="Cadastrar Produto"
          onPress={() => navigation.navigate("CadastroProduto")}
          color="gray"
        />
      </View>

      <View style={{ width: "80%", marginTop: 20 }}>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          color="red"
        />
      </View>
    </View>
  );
}
