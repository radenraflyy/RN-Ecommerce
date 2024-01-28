import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import React from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import styles from "./style"
import { Ionicons, Fontisto } from "@expo/vector-icons"
import { Welcome } from "../../components"
import Carousel from "../../components/home/Carousel"
import Heading from "../../components/home/Heading"
import ProductRow from "../../components/products/ProductRow"

const Home = () => {
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
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>Shanghai China</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartWrapper}>
              <Text style={styles.cartCount}>3</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={{ marginBottom: 100 }}>
        <Welcome />
        <Carousel />
        <Heading />
        <ProductRow />
      </ScrollView>
    </View>
  )
}

export default Home
