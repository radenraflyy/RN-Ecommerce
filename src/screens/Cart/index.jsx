import { View, Text } from "react-native"
import React from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const Cart = () => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Text>Cart</Text>
    </View>
  )
}

export default Cart
