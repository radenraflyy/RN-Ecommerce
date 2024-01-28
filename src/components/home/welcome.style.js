import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeText: (color, top, size) => ({
    fontFamily: "bold",
    fontSize: size,
    marginTop: top,
    color: color,
    marginHorizontal: 12,
  }),
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: "reguler",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
})

export default styles
