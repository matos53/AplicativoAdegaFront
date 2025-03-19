import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Importação das telas
import Login from "./janelas/Login";
import OpcoesCadastro from "./janelas/OpcoesCadastro";
import CadastroCliente from "./janelas/CadastroCliente";
import CadastroFuncionario from "./janelas/CadastroFuncionario";
import CadastroProduto from "./janelas/CadastroProduto";
import Menu from "./janelas/Menu";  // ⚠️ Certifique-se que esse arquivo existe!

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OpcoesCadastro" component={OpcoesCadastro} />
        <Stack.Screen name="CadastroCliente" component={CadastroCliente} />
        <Stack.Screen name="CadastroFuncionario" component={CadastroFuncionario} />
        <Stack.Screen name="CadastroProduto" component={CadastroProduto} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
