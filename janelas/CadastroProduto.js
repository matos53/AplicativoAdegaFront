import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  ScrollView,
  Alert,
  StyleSheet,
} from "react-native";
import { db } from "../janelas/firebaseConfig"; // Importando a configuração do Firebase
import { collection, addDoc } from "firebase/firestore"; // Importando funções do Firestore
import Logo from "../assets/logo.png"; // Importando a logo

export default function CadastroProduto({ navigation }) {
  // Estados para armazenar os valores dos campos
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [marca, setMarca] = useState("");
  const [teorAlcoolico, setTeorAlcoolico] = useState("");
  const [volume, setVolume] = useState("");
  const [precoCompra, setPrecoCompra] = useState("");
  const [precoVenda, setPrecoVenda] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [validade, setValidade] = useState("");
  const [fornecedor, setFornecedor] = useState("");

  // Função para salvar no Firebase Firestore
  const salvarProduto = async () => {
    if (
      !nome ||
      !categoria ||
      !marca ||
      !teorAlcoolico ||
      !volume ||
      !precoCompra ||
      !precoVenda ||
      !quantidade ||
      !validade ||
      !fornecedor
    ) {
      Alert.alert("Erro", "Todos os campos são obrigatórios!");
      return;
    }

    try {
      await addDoc(collection(db, "produtos"), {
        nome,
        categoria,
        marca,
        teorAlcoolico,
        volume,
        precoCompra,
        precoVenda,
        quantidade,
        validade,
        fornecedor,
      });

      Alert.alert("Sucesso", "Produto cadastrado com sucesso!");
      // Limpa os campos após o cadastro
      setNome("");
      setCategoria("");
      setMarca("");
      setTeorAlcoolico("");
      setVolume("");
      setPrecoCompra("");
      setPrecoVenda("");
      setQuantidade("");
      setValidade("");
      setFornecedor("");
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
      Alert.alert("Erro", "Não foi possível cadastrar o produto.");
    }
  };

  // Função para formatar a data automaticamente (DD/MM/AAAA)
  const formatarData = (text) => {
    let data = text.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (data.length > 8) data = data.slice(0, 8); // Limita a 8 dígitos

    // Adiciona as barras de separação automaticamente
    if (data.length >= 5) {
      data = `${data.slice(0, 2)}/${data.slice(2, 4)}/${data.slice(4)}`;
    } else if (data.length >= 3) {
      data = `${data.slice(0, 2)}/${data.slice(2)}`;
    }

    return data;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image source={Logo} style={styles.logo} resizeMode="contain" />

      {/* Título */}
      <Text style={styles.title}>Cadastro de Produto</Text>

      {/* Campos de Cadastro */}
      <TextInput
        placeholder="Nome do Produto"
        placeholderTextColor="gray"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Categoria (Ex: Vinho, Cerveja, Destilado)"
        placeholderTextColor="gray"
        style={styles.input}
        value={categoria}
        onChangeText={setCategoria}
      />
      <TextInput
        placeholder="Marca"
        placeholderTextColor="gray"
        style={styles.input}
        value={marca}
        onChangeText={setMarca}
      />
      <TextInput
        placeholder="Teor Alcoólico (%)"
        placeholderTextColor="gray"
        style={styles.input}
        keyboardType="numeric"
        value={teorAlcoolico}
        onChangeText={setTeorAlcoolico}
      />
      <TextInput
        placeholder="Volume (ml)"
        placeholderTextColor="gray"
        style={styles.input}
        keyboardType="numeric"
        value={volume}
        onChangeText={setVolume}
      />
      <TextInput
        placeholder="Preço de Compra (R$)"
        placeholderTextColor="gray"
        style={styles.input}
        keyboardType="numeric"
        value={precoCompra}
        onChangeText={setPrecoCompra}
      />
      <TextInput
        placeholder="Preço de Venda (R$)"
        placeholderTextColor="gray"
        style={styles.input}
        keyboardType="numeric"
        value={precoVenda}
        onChangeText={setPrecoVenda}
      />
      <TextInput
        placeholder="Quantidade em Estoque"
        placeholderTextColor="gray"
        style={styles.input}
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />

      {/* Campo de Validade com formatação automática */}
      <TextInput
        placeholder="Validade (DD/MM/AAAA)"
        placeholderTextColor="gray"
        style={styles.input}
        keyboardType="numeric"
        value={validade}
        onChangeText={(text) => setValidade(formatarData(text))}
      />

      <TextInput
        placeholder="Fornecedor"
        placeholderTextColor="gray"
        style={styles.input}
        value={fornecedor}
        onChangeText={setFornecedor}
      />

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <Button title="Salvar Produto" onPress={salvarProduto} color="green" />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          color="red"
        />
      </View>
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "black",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
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
