import React from "react";

import { I18nManager } from "react-native";
import { Provider } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";
import AppNavigation from "./navigation/AppNavigation";
import store from "./store/Store";
import { SafeAreaProvider } from "react-native-safe-area-context";

EStyleSheet.build({});

export default function App() {
  I18nManager.forceRTL(true);
  I18nManager.allowRTL(true);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}
