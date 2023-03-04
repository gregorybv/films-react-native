import { Text, View, Image } from "react-native"
import React from "react"

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 7,
        backgroundColor: "white",
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 22 }}>REACT</Text>
      <Text style={{ fontSize: 22, backgroundColor: "red", padding: 5 }}>
        NATIVE
      </Text>
    </View>
  )
}

export default Header
