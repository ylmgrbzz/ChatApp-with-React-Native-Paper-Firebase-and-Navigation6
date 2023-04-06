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
import firebase from "firebase/app";
import { useNavigation } from "@react-navigation/core";

const ChatList = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setEmail(user?.email ?? "");
    });
  }, []);

  const createChat = async () => {
    if (!email || !userEmail) return;
    setIsLoading(true);
    firebase
      .firestore()
      .collection("chats")
      .add({
        users: [email, userEmail],
      });
    setIsLoading(false);
    setIsDialogVisible(false);
    navigation.navigate("Chat");
  };

  return (
    <View style={{ flex: 1 }}>
      <List.Item
        title="ylmgrbzz"
        description="Hello"
        left={() => <Avatar.Text label="YL" size={56} />}
      />
      <Divider inset />
      <Portal>
        <Dialog
          visible={isDialogVisible}
          onDismiss={() => setIsDialogVisible(false)}
        >
          <Dialog.Title>New Chat</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Enter user email"
              value={userEmail}
              onChangeText={(text) => setUserEmail(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => createChat()} loading={isLoading}>
              Save
            </Button>
            <Button onPress={() => setIsDialogVisible(false)}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <FAB
        icon="plus"
        style={{ position: "absolute", bottom: 16, right: 16 }}
        onPress={() => setIsDialogVisible(true)}
      />
    </View>
  );
};

export default ChatList;
