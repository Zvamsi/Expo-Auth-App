import React, { useState } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      {loading && (
        <ActivityIndicator
          color="#6200ee"
          size="large"
          style={styles.loading}
        />
      )}
      <WebView
        source={{ uri: "https://netlify-auth-001.netlify.app" }}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
    zIndex: 1,
  },
});
