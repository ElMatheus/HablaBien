"use client";
import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  return (
    <ImageBackground source={require("@/assets/images/backgroundHome.jpeg")} className="flex-1" resizeMode="cover">
      <View className="flex-1 justify-center items-center z-5 ">
        <LinearGradient
          colors={['transparent', 'rgba(24, 24, 27, 0.5)', '#18181b']}
          locations={[0, 0.3, 1]}
          className="justify-center items-center m-auto p-2.5 absolute left-0 right-0 bottom-0 w-full"
        >
          <View className="justify-center items-center mt-3">
            <Text className="font-poppinsSB text-4xl color-white text-center mb-5 " style={{ textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 15 }}>Estimule seu <Text className="color-custoom-salmon">Espanhol</Text> com exercícios</Text>
            <TouchableOpacity className="bg-custoom-salmon py-3.5 p-10 rounded-full mt-2.5 border-2 border-custom-gray2 color-white mb-3">
              <Text className="color-white text-2xl font-poppinsM" onPress={() => router.navigate('/(tabs)/ListenAndRepeat')}>Iniciar</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </ImageBackground >
  )
}