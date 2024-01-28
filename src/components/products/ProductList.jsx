import { Text, View, FlatList, ActivityIndicator } from "react-native"
import { COLORS, SIZES } from "../../constants"
import styles from "./productList.style"
import React from "react"
import useFetch from "../../hook/useFetch"
import ProductCardView from "./ProductCardView"

const ProductList = () => {
  const { data, isLoading, error } = useFetch()

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ProductCardView item={item} />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.flatlistContentContainer}
        ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
      />
    </View>
  )
}

export default ProductList
