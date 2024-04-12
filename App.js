import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  let pastelDeCarne = 5.3;
  let pastelDeFrango = 4.7;
  let pastelDeQueijo = 4;
  let pastelDeVento = 8;
  const [resultado, setResultado] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/lacasadepastel.png")}
        style={{ width: 250, height: 250 }}
      />
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o valor 1"
          onChangeText={(valor1) => setValor1(valor1)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o valor 2"
          onChangeText={(valor2) => setValor2(valor2)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => operacao("soma")}
        >
          <Image
            source={require("./assets/pasteldecarne.png")}
            style={{ width: 120, height: 140 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => operacao("subtracao")}
        >
          <Image
            source={require("./assets/pasteldefrango.png")}
            style={{ width: 120, height: 140 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => operacao("multiplicacao")}
        >
          <Image
            source={require("./assets/pasteldequeijo.png")}
            style={{ width: 120, height: 140 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => operacao("divisao")}
        >
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.resultText}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8e2102",
  },
  inputsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 150,
    borderColor: "gray",
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: "#febc0d",
    padding: 2,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
  },
  resultText: {
    fontSize: 30,
  },
});
