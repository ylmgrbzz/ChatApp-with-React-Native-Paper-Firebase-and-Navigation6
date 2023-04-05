import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import {
  List,
  Avatar,
  Divider,
  FAB,
  Portal,
  Dialog,
  Button,
  TextInput,
} from "react-native-paper";
// import firebase from "firebase/app";
import { useNavigation } from "@react-navigation/core";

const ChatList = () => {
  return (
    <View style={{ flex: 1 }}>
      <List.Item
        title="ylmgrbz"
        description="Hello"
        left={() => <Avatar.Text label="YL" size={56} />}
      />
      <Divider inset style={{ backgroundColor: "red" }} />
      <List.Item
        title="ylmgrbz"
        description="Hello"
        left={() => <Avatar.Text label="YL" size={56} />}
      />
      <List.Item
        title="ylmgrbz"
        description="Hello"
        left={() => <Avatar.Text label="YL" size={56} />}
      />
      <List.Item
        title="ylmgrbz"
        description="Hello"
        left={() => <Avatar.Text label="YL" size={56} />}
      />
      <FAB
        icon="plus"
        style={{ position: "absolute", bottom: 16, right: 16 }}
      />
    </View>
  );
};

export default ChatList;
