import { Button, TextInput, View } from "react-native"
import React from "react"
import uuid from "react-native-uuid"

const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = React.useState("")

  return (
    <View>
      <TextInput
        placeholder='Введите название задачи'
        style={{
          padding: 15,
          margin: 15,
          backgroundColor: "white",
          shadowColor: "black",
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
        }}
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />
      <Button
        title='Добавить задачу'
        disabled={!inputValue}
        onPress={() => {
          addTodo({
            id: uuid.v4(),
            text: inputValue,
          })
          setInputValue("")
        }}
      />
    </View>
  )
}

export default Form
