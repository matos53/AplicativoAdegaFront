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
import Logo from "../assets/logo.png";
import { db } from "../janelas/firebaseConfig";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export default function CadastroFuncionario({ navigation }) {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erros, setErros] = useState({});

  // Função para verificar CPF e cadastrar funcionário
  const salvarFuncionario = async () => {
    let novosErros = {};

    if (!cpf) novosErros.cpf = "CPF é obrigatório.";
    else if (!/^\d{11}$/.test(cpf))
      novosErros.cpf = "CPF inválido (11 dígitos).";

    if (!nome) novosErros.nome = "Nome é obrigatório.";

    if (!telefone) novosErros.telefone = "Telefone é obrigatório.";
    else if (!/^\d{10,11}$/.test(telefone))
      novosErros.telefone = "Telefone inválido (10 ou 11 dígitos).";

    if (!email) novosErros.email = "E-mail é obrigatório.";
    else if (!/\S+@\S+\.\S+/.test(email)) novosErros.email = "E-mail inválido.";

    if (!senha) novosErros.senha = "Senha é obrigatória.";
    else if (senha.length < 6)
      novosErros.senha = "Senha deve ter pelo menos 6 caracteres.";

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    try {
      // 🔍 Verifica se o CPF já existe no Firestore
      const funcionariosRef = collection(db, "funcionarios");
      const consulta = query(funcionariosRef, where("cpf", "==", cpf));
      const resultado = await getDocs(consulta);

      if (!resultado.empty) {
        Alert.alert("Erro", "Este CPF já está cadastrado!");
        return;
      }

      // ✅ Se o CPF não existir, adiciona o funcionário
      await addDoc(funcionariosRef, {
        cpf,
        nome,
        telefone,
        email,
        senha,
      });

      Alert.alert("Sucesso", "Funcionário cadastrado com sucesso!");
      setCpf("");
      setNome("");
      setTelefone("");
      setEmail("");
      setSenha("");
      setErros({});
    } catch (error) {
      console.error("Erro ao cadastrar funcionário:", error);
      Alert.alert("Erro", "Não foi possível cadastrar. Tente novamente.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Cadastro de Funcionário</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="CPF"
          placeholderTextColor="gray"
          style={styles.input}
          keyboardType="numeric"
          value={cpf}
          onChangeText={(text) => {
            setCpf(text);
            setErros((prev) => ({ ...prev, cpf: "" }));
          }}
        />
        {erros.cpf && <Text style={styles.erroTexto}>{erros.cpf}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nome Completo"
          placeholderTextColor="gray"
          style={styles.input}
          value={nome}
          onChangeText={(text) => {
            setNome(text);
            setErros((prev) => ({ ...prev, nome: "" }));
          }}
        />
        {erros.nome && <Text style={styles.erroTexto}>{erros.nome}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Telefone"
          placeholderTextColor="gray"
          style={styles.input}
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={(text) => {
            setTelefone(text);
            setErros((prev) => ({ ...prev, telefone: "" }));
          }}
        />
        {erros.telefone && (
          <Text style={styles.erroTexto}>{erros.telefone}</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="gray"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErros((prev) => ({ ...prev, email: "" }));
          }}
        />
        {erros.email && <Text style={styles.erroTexto}>{erros.email}</Text>}
      </View>

      <View style={styles.senhaContainer}>
        <TextInput
          placeholder="Senha"
          placeholderTextColor="gray"
          style={styles.inputSenha}
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={(text) => {
            setSenha(text);
            setErros((prev) => ({ ...prev, senha: "" }));
          }}
        />
        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Ionicons
            name={mostrarSenha ? "eye-off" : "eye"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
      {erros.senha && <Text style={styles.erroTexto}>{erros.senha}</Text>}

      <View style={styles.buttonContainer}>
        <Button
          title="Salvar Funcionário"
          onPress={salvarFuncionario}
          color="green"
        />
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
  inputContainer: {
    width: "80%",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    padding: 5,
    color: "white",
  },
  senhaContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 10,
    paddingRight: 10,
  },
  inputSenha: {
    flex: 1,
    padding: 5,
    color: "white",
  },
  erroTexto: {
    color: "red",
    fontSize: 12,
    marginTop: 2,
  },
  buttonContainer: {
    width: "80%",
    marginBottom: 15,
  },
});
