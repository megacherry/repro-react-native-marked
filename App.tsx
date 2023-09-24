import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { TamaguiProvider } from "tamagui"
import config from "./tamagui.config"
import Markdown from "./Markdown"
import { useFonts } from "expo-font"
import { useEffect } from "react"

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  })

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />

          <Markdown />
        </View>
      </SafeAreaView>
    </TamaguiProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
