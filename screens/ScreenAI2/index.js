import React from "react";
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet, Button } from "react-native";
const documents = [{
  id: "1",
  title: "Document 1",
  summary: "This is a summary of document 1",
  price: "$10"
}, {
  id: "2",
  title: "Document 2",
  summary: "This is a summary of document 2",
  price: "$15"
}, {
  id: "3",
  title: "Document 3",
  summary: "This is a summary of document 3",
  price: "$20"
} // Add more documents as needed
];

const DocumentScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Documents</Text>
      <Button title="Add Document" onPress={() => {}} />
      <FlatList data={documents} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.itemContainer}>
            <Image style={styles.image} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.summary}>{item.summary}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 10
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: "center"
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121"
  },
  summary: {
    fontSize: 14,
    color: "#757575"
  },
  price: {
    fontSize: 14,
    color: "#757575",
    marginTop: 5
  }
});
export default DocumentScreen;