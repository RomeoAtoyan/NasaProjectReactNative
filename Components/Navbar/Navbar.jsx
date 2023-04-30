import React from "react";
import { Text, View, StyleSheet } from "react-native";
import moment from "moment";

const Navbar = ({ nasaData }) => {
  const date = nasaData?.date;
  const formattedDate = moment(date).format("DD MMMM YYYY");

  return (
    <View style={styles.navbar}>
      <Text style={styles.nav_title}>
        NASA <Text style={styles.Nasa_accent_color}>X</Text>
      </Text>
      <Text style={styles.nav_date}>{formattedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  nav_title: {
    color: "white",
    fontSize: 32,
  },

  nav_date: {
    color: "white",
    fontSize: 26,
  },

  Nasa_accent_color: {
    color: "yellow",
  },
});

export default Navbar;
