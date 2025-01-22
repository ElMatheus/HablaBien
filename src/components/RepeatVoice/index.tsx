import { View, Text, Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';
import BackgroundRadialGradient from '@/assets/images/backgroundRadialGradient';
import ContainerMic from '@/assets/images/containerMic';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const RepeatVoice = () => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const startPulse = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start(() => startPulse());
  };

  useEffect(() => {
    startPulse();
  }, []);

  return (
    <View className="absolute inset-0">
      {/* Fundo com gradiente radial */}
      <View className="absolute inset-0 z-10">
        <BackgroundRadialGradient />
      </View>

      {/* Conteúdo centralizado */}
      <View className="absolute inset-0 z-50 flex items-center justify-end p-5 gap-8">
        <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
          <View className="relative">
            {/* SVG Circle */}
            <ContainerMic />
            {/* Ícone centralizado */}
            <MaterialIcons
              name="record-voice-over"
              size={48}
              color="white"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: [{ translateX: -24 }, { translateY: -24 }],
              }}
            />
          </View>
        </Animated.View>
        {/* Texto abaixo */}
        <View className="bg-custom-black rounded-[2.5rem] py-4 px-10 mt-4">
          <Text className="font-poppinsR text-lg color-custom-white">Repita...</Text>
        </View>
      </View>
    </View>
  );
};

export default RepeatVoice;
