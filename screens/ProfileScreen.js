import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
// import Share from 'react-native-share';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserInfo } from "../services/user.api";

const ProfileScreen = ({ navigation }) => {
  //   const myCustomShare = async() => {
  //     const shareOptions = {
  //       message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
  //       url: files.appLogo,
  //       // urls: [files.image1, files.image2]
  //     }

  //     try {
  //       const ShareResponse = await Share.open(shareOptions);
  //       console.log(JSON.stringify(ShareResponse));
  //     } catch(error) {
  //       console.log('Error => ', error);
  //     }
  //   };
  const [data, setData] = useState({});
  const [skills, setSkills] = useState({});
  useEffect(() => {
    const getData = async () => {
      const arr = [];
      console.log("firstLaunch");
      const id = await AsyncStorage.getItem("user");
      const requestData = await getUserInfo(JSON.parse(id)._id);
      console.log(id._id);
      if (requestData) {
        console.log(requestData.data.data);
        setData(requestData.data.data);
        requestData.data.data.skills.map((item, index) => {
          arr.push(item.name);
        });
        console.log(arr);
        setSkills(arr);
      } else {
        alert("User does not exist");
      }
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: data ? data.profileImg : null,
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              {data ? data.firstName : null}
            </Title>
            <Caption style={styles.caption}>_joe</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Ionicons name="location" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {data ? data.branch : null}
          </Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="ios-call" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {data ? data.contactNo : null}
          </Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="mail" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {data ? data.email : null}
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <Text style={{ fontSize: 20, fontFamily: "NSBold", marginBottom: 10 }}>
          Your Skills
        </Text>
        <View style={styles.FlexBox}>
                    {skills.length>0 ? skills.map((item, index) => {
                        return (
                            <View style={styles.label} key={index}>
                                <Text  style={{ fontSize: 15, padding: 5, fontFamily: 'NSLight', color: "#ffffff", textAlign: "center" }}>
                                    {item}
                                </Text>
                            </View>
                        )
                    }) :
                        <View style={{flex:1,flexDirection: "row",justifyContent:"center",alignIttems:"center"}}>
                            <Text>Loading...</Text>
                        </View>}
                </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="heart" color="#000000" size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="card" color="#000000" size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
        // onPress={myCustomShare}
        >
          <View style={styles.menuItem}>
            <Ionicons name="share" color="#000000" size={25} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="help" color="#000000" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            AsyncStorage.clear();
            navigation.navigate("LoginScreen");
          }}
        >
          <View style={styles.menuItem}>
            <Ionicons name="settings" color="#000000" size={25} />
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginTop: 10,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  FlexBox: {
    flexDirection: "row",
    // justifyContent: "space-between",
    flexWrap: "wrap",
  },
  label: {
    minWidth: 70,
    height: 30,
    backgroundColor: "#8256d0",
    borderRadius: 5,
    margin: 5,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
