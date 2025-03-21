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
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { db } from "../janelas/firebaseConfig"; // Importa a configuração do Firebase Firestore
import { collection, addDoc, getDocs, query, where } from "firebase/firestore"; // Importa funções do Firestore
import Logo from "../assets/logo.png"; // Importa o logo

export default function CadastroCliente({ navigation }) {
  // Estados para armazenar os dados do formulário
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState("");

  // Função para validar CPF (apenas números e 11 dígitos)
  const validarCpf = (cpf) => /^\d{11}$/.test(cpf);

  // Função para validar telefone (apenas números e entre 10 e 11 dígitos)
  const validarTelefone = (telefone) => /^\d{10,11}$/.test(telefone);

  // Função para validar senha (mínimo 6 caracteres)
  const validarSenha = (senha) => senha.length >= 6;

  // Função para verificar se o CPF já está cadastrado no Firestore
  const cpfJaExiste = async (cpf) => {
    const q = query(collection(db, "clientes"), where("cpf", "==", cpf)); // Consulta no banco de dados
    const querySnapshot = await getDocs(q); // Obtém os resultados da consulta
    return !querySnapshot.empty; // Retorna verdadeiro se encontrar um CPF igual
  };

  // Função para salvar um novo cliente no Firestore
  const salvarCliente = async () => {
    // Verifica se todos os campos estão preenchidos
    if (!cpf || !nome || !email || !telefone || !senha) {
      setErro("Por favor, preencha todos os campos!");
      return;
    }

    // Valida o CPF
    if (!validarCpf(cpf)) {
      setErro("CPF inválido! Deve conter 11 dígitos numéricos.");
      return;
    }

    // Valida o telefone
    if (!validarTelefone(telefone)) {
      setErro("Telefone inválido! Deve conter 10 ou 11 dígitos.");
      return;
    }

    // Valida a senha
    if (!validarSenha(senha)) {
      setErro("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    try {
      // Verifica se o CPF já existe no banco
      const existe = await cpfJaExiste(cpf);
      if (existe) {
        setErro("CPF já cadastrado!");
        return;
      }

      // Adiciona o cliente ao Firestore
      await addDoc(collection(db, "clientes"), {
        cpf,
        nome,
        email,
        telefone,
        senha,
      });

      // Exibe uma mensagem de sucesso e reseta os campos do formulário
      Alert.alert("Sucesso", "Cliente cadastrado com sucesso!");
      setCpf("");
      setNome("");
      setEmail("");
      setTelefone("");
      setSenha("");
      setErro("");
    } catch (error) {
      console.error("Erro ao salvar cliente:", error);
      setErro("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Cadastro de Cliente</Text>
      // Exibe mensagem de erro caso haja alguma
      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
      {/* Campo de CPF */}
      <TextInput
        placeholder="CPF"
        placeholderTextColor="gray"
        style={styles.input}
        keyboardType="numeric"
        value={cpf}
        onChangeText={setCpf}
      />
      {/* Campo de Nome */}
      <TextInput
        placeholder="Nome Completo"
        placeholderTextColor="gray"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      {/* Campo de Email */}
      <TextInput
        placeholder="E-mail"
        placeholderTextColor="gray"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      {/* Campo de Telefone */}
      <TextInput
        placeholder="Telefone"
        placeholderTextColor="gray"
        style={styles.input}
        keyboardType="phone-pad"
        value={telefone}
        onChangeText={setTelefone}
      />
      {/* Campo de Senha com botão para mostrar/ocultar */}
      <View style={styles.senhaContainer}>
        <TextInput
          placeholder="Senha"
          placeholderTextColor="gray"
          style={styles.senhaInput}
          secureTextEntry={!mostrarSenha} // Oculta a senha quando mostrarSenha for false
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Ionicons
            name={mostrarSenha ? "eye" : "eye-off"} // Ícone de olho aberto ou fechado
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      {/* Botão para salvar o cliente */}
      <View style={styles.buttonContainer}>
        <Button title="Salvar Cliente" onPress={salvarCliente} color="green" />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Voltar" //Botão para voltar à tela anterior
          onPress={() => navigation.goBack()}
          color="red"
        />
      </View>
    </ScrollView>
  );
}

// Estilos da tela
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
  erro: {
    color: "red",
    marginBottom: 10,
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 15,
    padding: 5,
    color: "white",
  },
  senhaContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 15,
    padding: 5,
  },
  senhaInput: {
    flex: 1,
    color: "white",
  },
  buttonContainer: {
    width: "80%",
    marginBottom: 15,
  },
});
