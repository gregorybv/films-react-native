import React from "react"
import { SafeAreaView, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Todo from "./screens/Todo"
import Films from "./screens/Films"
import Header from "./components/Header"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarAllowFontScaling: true,
          tabBarLabelStyle: {
            fontSize: 22,
          },
          tabBarIcon: () => {
            return
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name='Заметки' component={Todo} />

        <Tab.Screen name='Фильмотека' component={Films} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
