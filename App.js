import { useEffect } from "react";
import { WebView } from "react-native-webview";
import { requestUserPermission } from "./firebaseMessaging";

export default function App() {
  useEffect(() => {
    requestUserPermission();
    listenToForegroundMessages();
  }, []);

  return <WebView source={{ uri: "https://your-nextjs-app-url.com" }} />;
}
