import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useState } from "react";

export default function App() {
  const [catURL, setCatURL] = useState(" ");

  const getCat = () => {
    fetch("https://aws.random.cat/meow")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCatURL(data.file);
      });
  };
  //getCat();
  return (
    <View style={styles.container}>
      <Text>My first app with React Native</Text>

      <Button
        onPress={getCat}
        title="Show me a cat"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Image
        style={styles.tinyLogo}
        source={{
          uri: catURL,
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 350,
    height: 350,
  },
});
