import React, { useEffect, useState } from "react";
import {
  applyJob,
  getAllEligibleJobs,
  getAllOffCampusJobs,
} from "../services/user.api";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Linking,
  SafeAreaView,
  Button,
  FlatList,
} from "react-native";
import CampusCard from "../components/CampusCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OffCampusCard from "../components/OffCampusCard";

const OffCampus = () => {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  useEffect(() => {
    console.log("dhruv my name");
    const initial = async () => {
      console;
      AsyncStorage.getItem("token").then((value) => {
        if (value == null) {
          navigation.navigate("LoginScreen");
        } else {
          setToken(value);
          console.log(token);
        }
      });

      AsyncStorage.getItem("user").then((value) => {
        if (value == null) {
          navigation.navigate("LoginScreen");
        } else {
          setUser(value);
          console.log("here are user details");
          console.log(user);
        }
      });

      const jobs = await getAllOffCampusJobs(token);
      if (jobs && jobs.status === 200) {
        setJobs(jobs.data.data);
      }
      console.log(jobs.data.data);
    };
    initial();
  }, [token]);
  return (
    <SafeAreaView style={styles.container}>
      {jobs ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={jobs}
          renderItem={({ item }) => (
            <OffCampusCard
              Title={item.Title}
              Company={item.Company}
              Location={item.Location}
              Place={item.Place}
              onPress={async () => {
                const supported = await Linking.canOpenURL(item.Link);

                if (supported) {
                  // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                  // by some browser in the mobile
                  await Linking.openURL(item.Link);
                } else {
                  Alert.alert(`Don't know how to open this URL: ${url}`);
                }
              }}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>No Jobs</Text>
          {/* add button */}
          <TouchableOpacity
            onPress={async () => {
              await applyJob(token, {
                jobId: jobs._id,
                applicationStatus: "applied",
                studentId: user._id,
              });
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Collect Trash</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default OffCampus;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00A86B",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
