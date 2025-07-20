import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function ProfileScreen() {
  const [isEditable, setIsEditable] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 1234567890",
  });

  const handleChange = (key, value) => {
    setProfile({ ...profile, [key]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
        }}
        style={styles.avatar}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={profile.name}
          editable={isEditable}
          onChangeText={(text) => handleChange("name", text)}
          style={[styles.input, !isEditable && styles.readOnly]}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          value={profile.email}
          editable={isEditable}
          onChangeText={(text) => handleChange("email", text)}
          style={[styles.input, !isEditable && styles.readOnly]}
        />

        <Text style={styles.label}>Phone</Text>
        <TextInput
          value={profile.phone}
          editable={isEditable}
          onChangeText={(text) => handleChange("phone", text)}
          style={[styles.input, !isEditable && styles.readOnly]}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsEditable(!isEditable)}>
        <Text style={styles.buttonText}>
          {isEditable ? "Save" : "Edit Profile"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 30,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  readOnly: {
    backgroundColor: "#f5f5f5",
    color: "#777",
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
