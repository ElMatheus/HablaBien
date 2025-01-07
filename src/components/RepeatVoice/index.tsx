import { View, Text, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const RepeatVoice = () => {

  const scaleValue = useRef(new Animated.Value(0)).current;

  const startPulse = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1000, // aumenta a duração para tornar a animação mais lenta
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 0.8, // altera o valor mínimo de escala para que o ícone não diminua muito
        duration: 1000, // aumenta a duração para tornar a animação mais lenta
        useNativeDriver: true,
      }),
    ]).start(() => startPulse());
  };

  useEffect(() => {
    startPulse();
  }, []);

  return (
    <View className='absolute inset-0 bg-black/50 justify-center z-40'>
      <View className='items-center'>
        <View className='bg-custoom-salmon pt-2 pb-6 px-3 rounded-full gap-5 items-center'>
          <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
            <MaterialIcons className='p-5 rounded-full bg-white' name="record-voice-over" size={68} color="#1C260D" />
          </Animated.View>
          <Text className='font-poppinsM text-2xl text-custom-brown'>Repita!</Text>
        </View>
      </View>
    </View>
  );
};

export default RepeatVoice