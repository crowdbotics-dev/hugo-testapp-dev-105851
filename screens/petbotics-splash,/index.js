import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ShoppingCartScreen = () => {
  const items = [{
    id: 1,
    name: "Product 1",
    price: 9.99,
    image: "https://tinyurl.com/42evm3m3"
  }, {
    id: 2,
    name: "Product 2",
    price: 19.99,
    image: "https://tinyurl.com/42evm3m3"
  }, {
    id: 3,
    name: "Product 3",
    price: 14.44,
    image: "https://tinyurl.com/42evm3m3"
  }];
  const total = items.reduce((acc, item) => acc + item.price, 0);
  return <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {items.map(item => <View key={item.id} style={styles.itemContainer}>
          <Image source={{
        uri: item.image
      }} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          </View>
        </View>)}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16
  },
  itemDetails: {
    flex: 1
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8
  },
  itemPrice: {
    fontSize: 14,
    color: "#888"
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#888"
  }
});
export default ShoppingCartScreen;