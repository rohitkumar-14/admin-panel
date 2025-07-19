import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/premium-vector/blue-white-logo-with-three-men-circle-with-picture-man-circle-with-picture-man-circle-with-rainbow-center_1205884-4061.jpg?semt=ais_hybrid&w=740",
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome Back, Admin</Text>
      <Text style={styles.subtitle}>
        Please sign in to access your dashboard and manage data efficiently.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7FF",
  },
  image: { width: 150, height: 150 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#4C5DF4",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: "white", fontWeight: "bold" },
  skip: { marginTop: 10, color: "#4C5DF4" },
});
