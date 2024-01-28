import { useCallback } from "react"
import { useFonts } from "expo-font"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import * as SplashScreen from "expo-splash-screen"
import BottomTabNavigation from "./src/navigation/BottomTabNavigation"
import { Cart, ProductDetail, NewRivals } from "./src/screens"

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    reguler: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductList"
          component={NewRivals}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
