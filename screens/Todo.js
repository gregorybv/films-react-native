import React from "react"
import { SafeAreaView, ImageBackground, Flatlist } from "react-native"
import Header from "../components/Header"
import TodoItem from "../components/TodoItem"

export default function Todo() {
  const [todoItems, setTodoItems] = React.useState([
    { id: 1, text: "React Native 1" },
    { id: 2, text: "React Native 2" },
    { id: 3, text: "React Native 3" },
  ])

  const addTodo = (newItem) => {
    setTodoItems([...todoItems, { ...newItem }])
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <ImageBackground
        source={{
          uri: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg",
        }}
        style={{ flex: 1 }}
      >
        <Flatlist
          data={todoItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem item={item} />}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}
