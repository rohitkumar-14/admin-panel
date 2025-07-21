import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const students = [
  { id: "1", name: "Aarav Mehta", branch: "Computer Science" },
  { id: "2", name: "Sanya Gupta", branch: "Bio Science" },
  { id: "3", name: "Rohan Singh", branch: "Mechanical Engineering" },
];

export default function Students() {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Text style={styles.heading}>Brilliant Students</Text>
        <TouchableOpacity
          style={styles.button}>
          <Text style={styles.buttonText}>
            Add Student
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.subtext}>Branch: {item.branch}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F4F6FC",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4C5DF4",
  },
  subtext: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  button: {
    backgroundColor: "#4C5DF4",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
