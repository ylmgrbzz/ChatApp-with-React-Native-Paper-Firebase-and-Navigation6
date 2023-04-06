import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View>
      <Button title="Sign Up" onPress={handleSignUpPress} />
      ylm
    </View>
  );
};

export default SignIn;
