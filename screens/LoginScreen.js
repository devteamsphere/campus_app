import React,{useEffect} from "react";
import alert from "../utils/alert";
import { View, Text, SafeAreaView, Keyboard, Alert } from "react-native";
import COLORS from "../theme/colors";
import Button from "../components/Button";
import Input from "../components/Input";
import { signIn } from "../services/user.api";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Loader from '../components/Loader';

const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({ email: "", password: "" });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    const initial = async () => {
      AsyncStorage.getItem("token").then((value) => {
        if (value != null) {
          console.log('first')
          navigation.navigate("Home");
        }
      });
    };
    initial();
  }, []);
  const handleSubmit = async () => {
    // navigation.navigate("Home");
    const userdata = await signIn(inputs);
    console.log(userdata);
    if (userdata) {
      if (userdata.data.code === 200) {
        AsyncStorage.setItem("token", userdata.data.data.token);
        AsyncStorage.setItem("user", JSON.stringify(userdata.data.data));

        navigation.navigate("Home");
      } else {
        alert("Error", "User does not exist");
      }
    } else {
      alert("Error", "User does not exist");
    }
  };
  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      //   let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.email == userData.email &&
          inputs.password == userData.password
        ) {
          navigation.navigate("Home");
          //   AsyncStorage.setItem(
          //     'userData',
          //     JSON.stringify({...userData, loggedIn: true}),
          //   );
        } else {
          Alert.alert("Error", "Invalid Details");
        }
      } else {
        Alert.alert("Error", "User does not exist");
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    console.log(text, input);
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      {/* <Loader visible={loading} /> */}
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: "bold" }}>
          Log In
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Enter Your Details to Login
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Button title="Log In" onPress={handleSubmit} />
          <Text
            onPress={() => navigation.navigate("RegisterScreen")}
            style={{
              color: COLORS.black,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Don't have account ?Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
