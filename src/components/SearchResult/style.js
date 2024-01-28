import { StyleSheet } from "react-native"
import { COLORS, SHADOWS, SIZES } from "../../constants"

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: SIZES.small,
    borderRadius: SIZES.small,
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
    backgroundColor: COLORS.lightWhite,
    padding: 10,
    gap: 20,
  },
  image: {
    width: 70,
    justifyContent: "center",
    alignContent: "center",
  },
  Productimage: {
    width: "100%",
    height: 65,
    borderRadius: SIZES.small,
    resizeMode: "cover",
  },
  description: {
    flex: 1,
  },
})

export default styles
