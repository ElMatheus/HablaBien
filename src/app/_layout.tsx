import '../styles/global.css';
import { Slot } from "expo-router";
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Slot />
  );
}
