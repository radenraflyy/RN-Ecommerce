import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import styles from "./style"
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons"
import { COLORS, SIZES } from "../../constants"
import ProductList from "../../components/products/ProductList"

const NewRivals = ({ navigation }) => {
  const insets = useSafeAreaInsets()

  return (
    // <View
    //   style={{
    //     paddingTop: insets.top,
    //     paddingBottom: insets.bottom,
    //     paddingLeft: insets.left,
    //     paddingRight: insets.right,
    //   }}
    // >
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>Products</Text>
        </View>
        <ProductList />
      </View>
    </View>
    // </View>
  )
}

export default NewRivals
