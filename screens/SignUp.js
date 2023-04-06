import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Button, Subheading } from "react-native-paper";
import firebase from "firebase/app";
import { useNavigation } from "@react-navigation/core";



const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const createAccount = async () => {
    setIsLoading(true);
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await response.user.updateProfile({ displayName: name });
      navigation.popToTop();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      // alert(error.message);
      setError(error.message);
    }
  };

  const navigation = useNavigation();
  return (
    <View style={{ margin: 16 }}>
      {!!error && (
        <Subheading
          style={{ color: "red", textAlign: "center", marginBottom: 16 }}
        >
          {error}
        </Subheading>
      )}
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        label="Email"
        style={{ marginTop: 12 }}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        style={{ marginTop: 12 }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <Button compact onPress={() => navigation.navigate("SignIn")}>
          Sign In
        </Button>
        <Button
          mode="contained"
          onPress={() => createAccount()}
          loading={isLoading}
        >
          Sign Up
        </Button>
      </View>
    </View>
  );
};

export default SignUp;
