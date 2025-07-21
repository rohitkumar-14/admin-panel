import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { PlusCircle } from "lucide-react-native";

const ImageGallery = () => {
  const images = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1753010837210-06dfb1ffc5d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      alt: "image",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1752867494503-4d536bc665f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
      alt: "image",
    },
  ];

   const renderItem = ({ item }) => (
     <Image source={{ uri: item.src }} style={styles.image} />
   );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadBtn}>
        <PlusCircle size={24} color="#10D3C3" />
        <Text style={styles.uploadText}>Upload</Text>
      </TouchableOpacity>

      {images.length === 0 ? (
        <Text style={styles.noImageText}>No images uploaded</Text>
      ) : (
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={styles.gallery}
        />
      )}
    </View>
  );
};

export default ImageGallery;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  uploadBtn: {
    position: "absolute",
    top: 40,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    zIndex: 10,
  },
  uploadText: {
    color: "#10D3C3",
    marginLeft: 5,
    fontWeight: "bold",
  },
  gallery: {
    marginTop: 100,
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
  noImageText: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 120,
  },
});
