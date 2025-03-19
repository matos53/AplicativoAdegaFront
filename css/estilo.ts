import { StyleSheet, Dimensions, TextInput } from "react-native";

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#000000",
  },
  topo: {
    height: Dimensions.get("window").height / 3, //faz se adapitar ao dispositivo
    width: 393,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  meio: {
    height: Dimensions.get("window").height / 3,
    width: 393,
    backgroundColor: "#000000",
  },
  botao: {
    height: 100,
    width: 393,
    backgroundColor: "#000000",
    marginLeft: 200,
  },
  texto: {
    fontWeight: "bold",
    marginTop: 40,
    color: "#ffffff",
  },
  title: {
    marginLeft: 30,
    marginTop: 20,
    color: "#ffffff",
  },
  boxInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  input: {
    width: "93%",
    height: 40,
    borderRadius: 40,
    paddingLeft: 5,
  },
  botao1: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 40,
  },
  title1: {
    marginLeft: 10,
    color: "#ffffff",
  },
});
