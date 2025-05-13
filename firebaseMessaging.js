import messaging from "@react-native-firebase/messaging";
import { Alert } from "react-native";

export function listenToForegroundMessages() {
  messaging().onMessage(async (remoteMessage) => {
    Alert.alert(
      remoteMessage.notification?.title || "Notification",
      remoteMessage.notification?.body || ""
    );
  });
}

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status:", authStatus);
    getFCMToken();
  }
}

export async function getFCMToken() {
  const token = await messaging().getToken();
  console.log("FCM Token:", token);
  // You can send this token to your backend/server
}
