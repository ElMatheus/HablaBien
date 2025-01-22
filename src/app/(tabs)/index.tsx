"use client";
import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Index() {
  const router = useRouter();
  return (
    <ImageBackground source={require("@/assets/images/backgroundHome.jpeg")} className="flex-1" resizeMode="cover">
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', '#110F2D']}
        style={{ flex: 1 }}
      >
        <View className="flex-1 pr-3 pb-8 justify-end items-end">
          <Text className="font-poppinsSB text-xl color-custom-primary">HablaBien</Text>
          <Text className="font-poppinsB text-5xl color-custom-white text-right leading-teste">
            Estimule seu espanhol com exercícios.
          </Text>
          <TouchableOpacity className="bg-custom-primary p-5 rounded-3xl mt-5 flex-row items-center gap-4" onPress={() => router.navigate('/(tabs)/ListenAndRepeat')}>
            <Text className="font-poppinsB text-3xl color-black">Começar</Text>
            <MaterialCommunityIcons className="p-1 bg-custom-black rounded-full" name="arrow-right" size={27} color="#FC746E" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  )
}
