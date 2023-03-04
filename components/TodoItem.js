import { Text, TouchableOpacity, View } from "react-native"
import React from "react"

const TodoItem = ({ item, deleteTodo }) => {
  return (
    <TouchableOpacity
      onLongPress={() => deleteTodo(item.id)}
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
        backgroundColor: "white",
        margin: 5,
        borderRadius: 5,
      }}
    >
      <Text
        style={{
          fontSize: 18,
        }}
      >
        {item.text}
      </Text>
      <TouchableOpacity onPress={() => deleteTodo(item.id)}>
        <Text>&#128465;</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default TodoItem
