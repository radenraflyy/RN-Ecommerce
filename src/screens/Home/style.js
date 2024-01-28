import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "bold",
    fontSize: 40,
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartWrapper: {
    position: "absolute",
    bottom: 16,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    backgroundColor: "green",
    borderRadius: 8,
    width: 16,
    height: 16,
  },
  cartCount: {
    fontFamily: "reguler",
    fontSize: 10,
    fontWeight: "600",
    color: COLORS.lightWhite,
  },
})

export default styles
