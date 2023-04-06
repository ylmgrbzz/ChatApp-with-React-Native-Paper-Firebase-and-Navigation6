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
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <List.Item
        title="ylmgrbz"
        description="Hello"
        left={() => <Avatar.Text label="YL" size={56} />}
      />
      <Divider inset style={{ backgroundColor: "red" }} />
      <Portal>
        <Dialog
          visible={isDialogVisible}
          onDismiss={() => setIsDialogVisible(false)}
        >
          <Dialog.Title>New Chat</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Enter user email"
              // value={userEmail}
              // onChangeText={(text) => setUserEmail(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button>Save</Button>
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
