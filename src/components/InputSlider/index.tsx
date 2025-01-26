import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, runOnJS, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const Slider = ({ min = 0, max = 100, onChange, initialValue }: { min?: number; max?: number; onChange?: (value: number) => void; initialValue?: number }) => {
  const progress = useSharedValue(0);
  const sliderWidth = useSharedValue(0);
  const step = 0.1;
  const heightProgress = useSharedValue(19);

  useEffect(() => {
    if (initialValue !== undefined) {
      const percentage = (initialValue - min) / (max - min);
      progress.value = percentage * 100;
    }
  }, [initialValue]);

  const updateProgress = (x: number) => {
    'worklet';
    const percentage = Math.min(Math.max(x / sliderWidth.value, 0), 1);
    progress.value = percentage * 100;

    if (onChange) {
      let mappedValue = percentage * (max - min) + min;

      mappedValue = Math.round(mappedValue / step) * step;

      runOnJS(onChange)(parseFloat(mappedValue.toFixed(2)));
    }
  };

  // Gesto de arraste
  const panGesture = Gesture.Pan()
    .onStart((event) => {
      updateProgress(event.x);
      heightProgress.value = withTiming(28, { duration: 200 });
    })
    .onUpdate((event) => {
      updateProgress(event.x);
    })
    .onEnd(() => {
      heightProgress.value = withTiming(19, { duration: 200 });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value}%`,
    backgroundColor: '#FC746E',
    height: heightProgress.value,
    borderRadius: 6,
  }));

  const animatedStyleBack = useAnimatedStyle(() => ({
    height: heightProgress.value,
  }));

  return (
    <View
      onLayout={(event) => {
        sliderWidth.value = event.nativeEvent.layout.width;
      }}
      style={{ paddingHorizontal: 20 }}
    >
      <View style={[animatedStyleBack, { backgroundColor: '#D9D9D9', borderRadius: 118, overflow: 'hidden' }]}>
        <Animated.View style={animatedStyle} />
      </View>

      <GestureDetector gesture={panGesture}>
        <View className='absolute w-full h-32' />
      </GestureDetector>
    </View>
  );
};

export default Slider;
