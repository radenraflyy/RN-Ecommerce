import { View, Text, Image } from "react-native"
import React from "react"
import styles from "./style"
import { COLORS, SIZES } from "../../constants"

const SearchResult = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={{ uri: item.imageUrl }} style={styles.Productimage} />
      </View>
      <View style={styles.description}>
        <Text
          style={{
            fontSize: SIZES.medium,
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          {item.title}
        </Text>
        <Text style={{ color: COLORS.gray }}>{item.description}</Text>
        <Text style={{ color: COLORS.gray, marginTop: 10 }}>{item.price}</Text>
      </View>
    </View>
  )
}

export default SearchResult
