import { ActivityIndicator, FlatList, Text, View } from "react-native"
import React from "react"
import { COLORS, SIZES } from "../../constants"
import ProductCardView from "./ProductCardView"
import styles from "./productRow.style"
import useFetch from "../../hook/useFetch"

const ProductRow = () => {
  const { data, error, isLoading } = useFetch()
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something Error...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <>
              <ProductCardView item={item} />
            </>
          )}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  )
}

export default ProductRow
