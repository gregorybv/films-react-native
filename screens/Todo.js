import React from "react"
import {SafeAreaView, ImageBackground, Text, FlatList} from "react-native"
import Form from "../components/Form"
import Header from "../components/Header"
import TodoItem from "../components/TodoItem"

export default function Todo() {
  const [todoItems, setTodoItems] = React.useState([])

  const addTodo = (newItem) => {
    setTodoItems([...todoItems, { ...newItem }])
  }

  const deleteTodo = (id) => {
    setTodoItems((newList) => {
      return newList.filter((todoItems) => id !== todoItems.id)
    })
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
        <Form addTodo={addTodo} />

        {todoItems.length ? <Text>Всего: [{todoItems.length}]</Text> : null}


        <FlatList
          data={todoItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem item={item} deleteTodo={deleteTodo} />
          )}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}
