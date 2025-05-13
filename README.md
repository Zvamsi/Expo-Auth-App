## Expo WebView App with Native Firebase Cloud Messaging (FCM)

## Tech Stack

- **Next.js** (hosted on Netlify: [https://netlify-auth-001.netlify.app])
- **Expo (bare workflow)** React Native App
- **Firebase Cloud Messaging (native setup)**

---

## Folder Structure

```
expo-fcm-webview-app/
├── App.js                  # WebView & FCM logic
├── firebaseMessaging.js    # FCM token handling and listeners
├── android/
│   └── app/
│       └── google-services.json  #From the Firebase android app connection
├── firebaseMessaging
│
├── package.json
└── ...
```

---

## Prerequisites

- Node.js ≥ 16
- Expo CLI: `npm install -g expo-cli`
- Firebase project with Android app registered

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Zvamsi/Expo-Auth-App.git
cd MyAuthApp
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Add Firebase Config

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to Project Settings → Android App (or Add one)
4. Download the `google-services.json` file
5. Replace the placeholder file in:

```
android/app/google-services.json
```

---

### 4. Run the App

Make sure your Android device/emulator is connected.
In command Line go to the respective directory and run the command.

```bash
npm start
```

You should see your hosted web app inside the native Expo app via WebView.

---

## 🔔 Firebase Cloud Messaging (FCM) Testing

### ✅ Automatic Setup:

- Token is requested and printed on app launch
- Listeners are set for:

  - Foreground messages
  - Background/resume notifications

### 🔫 Send Test Notification (From Firebase Console)

1. Go to Firebase Console → Cloud Messaging
2. Create a new campaign
3. Paste the FCM token from the app's console log
4. Send a test notification

> 📝 You’ll see the log in the Metro console:

```bash
FCM Token: your_fcm_token_here
Foreground message: { title, body, data... }
```

## ⚠️ Notes

-Sometimes third party browser's cannot complete signUp because of security reasons, from unauthorized domain like (netlify), thus need to be aware of that
The error is "Unable to process request due to missing initial state. This may happen if browser sessionStorage is inaccessible or accidentally cleared. Some specific scenarios are - 1) Using IDP-Initiated

SAML SSO. 2) Using signInWithRedirect in a storage-partitioned browser environment."
