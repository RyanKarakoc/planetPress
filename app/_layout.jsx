import { Stack } from "expo-router";
import { GlobalStateProvider } from "../providers/GlobalState";

export default function RootLayout() {
  return (
    <GlobalStateProvider>
      <Stack screenOptions={{}} />
    </GlobalStateProvider>
  );
}
