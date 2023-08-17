import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from "react-native";

const EntryScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Note-taking App</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.icon} />
          <Text style={styles.iconText}>Page 1 📝</Text>
          <Text style={styles.iconDescription}>Create a new note</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.icon} />
          <Text style={styles.iconText}>Page 2 📖</Text>
          <Text style={styles.iconDescription}>Read your notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.icon} />
          <Text style={styles.iconText}>Page 3 🗑️</Text>
          <Text style={styles.iconDescription}>Delete a note</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.icon} />
          <Text style={styles.iconText}>Page 4 🎨</Text>
          <Text style={styles.iconDescription}>Customize your app</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>About My App</Text>
        <Text style={styles.footerDescription}>
          My App is a simple and easy-to-use note-taking app that allows you to
          create, read, and delete notes. With My App, you can keep track of all
          your important thoughts and ideas in one place. Whether you're a
          student, a professional, or just someone who likes to stay organized,
          My App is the perfect tool for you.
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    height: 150,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 10
  },
  iconText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  iconDescription: {
    fontSize: 14,
    color: "#666"
  },
  footer: {
    backgroundColor: "#f2f2f2",
    padding: 20
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  footerDescription: {
    fontSize: 14,
    color: "#666"
  }
});
export default EntryScreen;