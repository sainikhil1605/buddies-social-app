import React, { useState } from "react";
import {
  createTheme,
  darkColors,
  lightColors,
  ThemeProvider,
  useThemeMode,
} from "@rneui/themed";

import { Platform, useColorScheme } from "react-native";
import { AppProvider } from "./utils/store";
import Navigation from "./components/Navigation";

export default function App() {
  const colorSchema = useColorScheme();
  const theme = createTheme({
    lightColors: {
      ...Platform.select({
        default: lightColors.platform.android,
        ios: lightColors.platform.ios,
      }),
    },
    darkColors: {
      ...Platform.select({
        default: darkColors.platform.android,
        ios: darkColors.platform.ios,
      }),
    },
    mode: colorSchema,
  });

  return (
    <ThemeProvider theme={theme}>
      <AppProvider value={{}}>
        <Navigation />
      </AppProvider>
    </ThemeProvider>
  );
}
