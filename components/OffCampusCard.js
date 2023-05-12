import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const OffCampusCard = ({ Title, Company, Location, Place, onPress }) => {
  return (
    <View style={styles.CampusCardContent}>
      <View style={styles.row}>
        <Text style={styles.heading}>{Title}</Text>
        <Text>{Location}</Text>
      </View>
      <Text style={styles.boldFont}>
        Expreience Required <Text>{Company}</Text>
      </Text>
      <Text>{Place}</Text>
      <View>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.text}>Visit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    borderLeftWidth: 10,
    borderLeftColor: "#8256d0",
  },
  CampusCardContent: {
    padding: 16,
    marginTop: 16,
    backgroundColor: "#FFF",
    width: 340,
    borderLeftWidth: 5,
    borderLeftColor: "#8256d0",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  col: {
    flexDirection: "col",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  cardContent: {
    padding: 16,
    marginTop: 16,
    backgroundColor: "#FFF",
    width: "100%",
  },

  button: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#8256d0",
    borderRadius: 5,
    marginTop: 5,
  },
  text: {
    color: "#fff",
  },
  boldFont: {
    fontWeight: "bold",
    fontSize: 14,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 16,
  },
  badge: {
    color: "white",
    backgroundColor: "black",
    padding: 4,
    borderRadius: 5,
    fontSize: 10,
  },
});

export default OffCampusCard;
