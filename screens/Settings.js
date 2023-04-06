import React, { useEffect, useState } from "react";
import { Avatar, Title, Subheading, Button } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";

const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <View style={{ alignItems: "center", marginTop: 16 }}>
      <Avatar.Text label="YL" size={56} />
      <Title>User Name"</Title>
      <Subheading>User Email</Subheading>
      <Button style={{ marginTop: 6 }}>Sign Out</Button>
    </View>
  );
};

export default Settings;
