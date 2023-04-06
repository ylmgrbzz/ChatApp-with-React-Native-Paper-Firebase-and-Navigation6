import { useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import firebase from "firebase/app";
import { GiftedChat } from "react-native-gifted-chat";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  console.log(messages);
  const [uid, setUID] = useState("");
  console.log(uid);
  const [name, setName] = useState("");
  console.log(name);

  const route = useRoute();
  console.warn(route.params.chatId);
  console.log(route.params.chatId);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUID(user?.uid);
      setName(user?.displayName);
      console.log(user?.uid);
    });
  }, []);

  useEffect(() => {
    return firebase
      .firestore()
      .doc("chats/" + route.params.chatId)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.data()?.messages ?? []);
        console.log(snapshot.data()?.messages ?? []);
      });
  }, [route.params.chatId]);

  const onSend = (m = []) => {
    firebase
      .firestore()
      .doc("chats/" + route.params.chatId)
      .set(
        {
          messages: GiftedChat.append(messages, m),
        },
        { merge: true }
      );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <GiftedChat
        messages={messages.map((x) => ({
          ...x,
          createdAt: x.createdAt?.toDate(),
        }))}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: uid,
          name: name,
        }}
      />
    </View>
  );
};

export default Chat;
