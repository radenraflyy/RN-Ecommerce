import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from "react-native"
import React, { useState } from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Feather, Ionicons } from "@expo/vector-icons"
import { COLORS, SIZES } from "../../constants"
import styles from "./style"
import axios from "axios"
import { SearchResult } from "../../components"

const Search = () => {
  const [searchKey, setSearchKey] = useState("")
  const [searchResult, setSearchResult] = useState("")

  const insets = useSafeAreaInsets()

  const onSearch = async () => {
    try {
      const res = await axios.get(
        `https://rjbv4f3d-3000.asse.devtunnels.ms/api/product/search/${searchKey}`
      )
      setSearchResult(res.data)
    } catch (error) {
      console.log(error)
    }
  }

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
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchKey}
            onPressIn={() => {}}
            onChangeText={setSearchKey}
            placeholder="What Are You Looking For"
            style={styles.searchInput}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => onSearch()}>
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResult.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchResult item={item} />}
        />
      )}
    </View>
  )
}

export default Search
