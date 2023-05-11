import React, { useEffect, useState } from "react";
import { applyJob, getAllEligibleJobs } from "../services/user.api";
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

const OnCampus = () => {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  useEffect(() => {
    const initial = async () => {
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

      const jobs = await getAllEligibleJobs(token);
      if (jobs && jobs.status === 200) {
        setJobs(jobs.data.data);
      }
      console.log(jobs.data.data);
    };
    initial();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {jobs ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={jobs}
          renderItem={({ item }) => (
            <CampusCard
              jobTitle={item.jobTitle}
              jobDescription={item.jobDescription}
              jobLocation={item.jobLocation}
              jobDuration={item.jobDuration}
              jobExperience={item.jobExperience}
              jobSalary={item.jobSalary}
              batchEligible={item.batchEligible}
              branchEligible={item.branchEligible}
              onPress={async () => {
                const apply = await applyJob(token, {
                  jobId: item._id,
                  applicationStatus: "applied",
                  studentId: JSON.parse(user)._id,
                });
                // console.log(apply);
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

export default OnCampus;

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
