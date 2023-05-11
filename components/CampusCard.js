import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CampusCard = ({
  jobTitle,
  jobLocation,
  jobExperience,
  jobDescription,
  batchEligible,
  branchEligible,
  jobSalary,
  onPress,
}) => {
  return (
    <View style={styles.CampusCardContent}>
      <View style={styles.row}>
        <Text style={styles.heading}>
          {jobTitle} - {jobSalary}
          {" LPA"}
        </Text>
        <Text>{jobLocation}</Text>
      </View>
      <Text style={styles.boldFont}>
        Expreience Required <Text>{jobExperience}</Text>
      </Text>
      <Text>{jobDescription.substring(0, 100)}...</Text>
      <Text style={styles.boldFont}>Batchs Eligible </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {batchEligible.map((batch, indx) => {
          return (
            <View>
              <Text key={indx} style={styles.badge}>
                {batch}
              </Text>
            </View>
          );
        })}
      </View>

      <Text style={styles.boldFont}>Branch Eligible </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {branchEligible.map((brach, indx) => {
          return (
            <View>
              <Text key={indx} style={styles.badge}>
                {brach}
              </Text>
            </View>
          );
        })}
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.text}>Apply</Text>
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
    width: 300,
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
    backgroundColor: "#228B22",
    borderRadius: 10,
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
    backgroundColor: "#3498db",
    padding: 4,
    borderRadius: 10,
    fontSize: 10,
  },
});

export default CampusCard;
