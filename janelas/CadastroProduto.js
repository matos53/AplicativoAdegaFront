import React from "react";
import { View, Text, Button, TextInput, Image, ScrollView } from "react-native";
import Logo from "../assets/logo.png"; // Importando a logo

export default function CadastroProduto({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: "black",
        alignItems: "center",
        paddingTop: 50,
        paddingBottom: 20,
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
        Cadastro de Produto
      </Text>

      {/* Campos de Cadastro */}
      <TextInput
        placeholder="Nome do Produto"
        placeholderTextColor="gray"
        style={styles.input}
      />
      <TextInput
        placeholder="Categoria (Ex: Vinho, Cerveja, Destilado)"
        placeholderTextColor="gray"
        style={styles.input}
      />
      <TextInput
        placeholder="Marca"
        placeholderTextColor="gray"
        style={styles.input}
      />
      <TextInput
        placeholder="Teor Alcoólico (%)"
        placeholderTextColor="gray"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Volume (ml)"
        placeholderTextColor="gray"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Preço de Compra (R$)"
        placeholderTextColor="gray"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Preço de Venda (R$)"
        placeholderTextColor="gray"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Quantidade em Estoque"
        placeholderTextColor="gray"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Validade (DD/MM/AAAA)"
        placeholderTextColor="gray"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Fornecedor"
        placeholderTextColor="gray"
        style={styles.input}
      />

      {/* Botões Separados */}
      <View style={{ width: "80%", marginBottom: 15 }}>
        <Button
          title="Salvar Produto"
          onPress={() => alert("Produto cadastrado!")}
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
    </ScrollView>
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
