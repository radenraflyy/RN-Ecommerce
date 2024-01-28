import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { SliderBox } from "react-native-image-slider-box"
import { COLORS } from "../../constants"

const Carousel = () => {
  const sliders = [
    "https://www.99.co/id/panduan/wp-content/uploads/2022/11/built-in-furniture.jpg",
    "https://d3p0bla3numw14.cloudfront.net/news-content/img/2021/10/27211303/Furniture-Unik-untuk-Rumah-Kecil.jpg",
    "https://propertiaset.com/wp-content/uploads/2023/03/Toko-Futniture-Jakarta-Selatan-jpg.webp",
  ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={sliders}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "95%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
})
