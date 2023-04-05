import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// import { Provider, DefaultTheme } from "react-native-paper";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatList from "./screens/ChatList";
import Chat from "./screens/Chat";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Settings from "./screens/Settings";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons
              name={route.name === "ChatList" ? "chatbubbles" : "settings"}
              color={color}
              size={size}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="ChatList" component={ChatList} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ presentation: "fullScreenModal" }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ presentation: "fullScreenModal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
