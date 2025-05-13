import React from "react";
import { SafeAreaView, StatusBar, Platform } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <WebView source={{ uri: "https://netlify-auth-001.netlify.app" }} />
    </SafeAreaView>
  );
}
