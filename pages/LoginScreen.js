import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/premium-vector/secure-login-form-page-with-password-computer-padlock-3d-vector-icon-cartoon-minimal-style_365941-1119.jpg?semt=ais_hybrid&w=740",
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <TextInput
        placeholder="name@example.com"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Dashboard")}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
        <Text style={styles.signup}>
          Don't have an account?{" "}
          <Text style={{ color: "#4C5DF4" }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F7F7FF",
  },
  image: { width: 250, height: 200, marginVertical: 40 },
  input: {
    width: "100%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#4C5DF4",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "white", fontWeight: "bold" },
  signup: { marginTop: 20, color: "#666" },
});
