import React from "react";

import { I18nManager } from "react-native";
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  I18nManager.forceRTL(true);

  return <AppNavigation />;
}
