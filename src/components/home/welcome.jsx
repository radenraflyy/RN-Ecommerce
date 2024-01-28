import { View, Text, TouchableOpacity, TextInput } from "react-native"
import React from "react"
import styles from "./welcome.style"
import { COLORS, SIZES } from "../../constants"
import { Feather, Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const Welcome = () => {
  const navigation = useNavigation()
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={styles.welcomeText(
            COLORS.black,
            SIZES.xSmall,
            SIZES.xxLarge - 6
          )}
        >
          Find The Most
        </Text>
        <Text style={styles.welcomeText(COLORS.primary, 0, 30)}>
          Luxurious Furniture
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            // value=""
            onPressIn={() => {
              navigation.navigate("Search")
            }}
            placeholder="What Are You Looking For"
            style={styles.searchInput}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge}
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Welcome
