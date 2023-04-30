import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  const [nasaData, setNasaData] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=dPdPSJldELdz2FThThVbVNdzFSEj7LAY9I0xsalx"
      );
      const data = await response.json();
      console.log(data);
      setNasaData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar nasaData={nasaData} />
      <View style={styles.imageContainer}>
        <Text style={{ color: "white", fontSize: 20 }}>{nasaData?.title}</Text>
        <Image
          source={{
            uri: nasaData?.hdurl,
          }}
          style={{ width: 350, height: 350 }}
        />
        <Text
          style={{
            color: "white",
            marginTop: 50,
            width: "95%",
            textAlign: "justify",
          }}
        >
          {nasaData?.explanation}
        </Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 80,
  },

  containerText: {
    fontsize: 100,
    color: "white",
  },
});
