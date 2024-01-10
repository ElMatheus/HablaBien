import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

const RepeatVoice = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

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
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
            <Icon style={styles.iconMic} name="keyboard-voice" size={56} color="#1C260D" />
          </Animated.View>
          <Text style={styles.txtRepeat}>Repetir</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ECECEC',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#A7F272',
    padding: 8,
    borderRadius: 50,
    gap: 5,
    alignItems: 'center',
  },
  iconMic: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 50,
  },
  txtRepeat: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    color: '#1C260D',
  },
});

export default RepeatVoice;