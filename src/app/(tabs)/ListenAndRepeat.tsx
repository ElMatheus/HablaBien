import axios from "axios";
import { Text, View, TouchableOpacity, Image, Pressable } from "react-native";
import { useEffect, useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import * as Speech from 'expo-speech';
import PopUp from "@/src/components/MessageError";
import SettingsAudio from "@/src/components/SettingsAudio";
import RepeatVoice from "@/src/components/RepeatVoice";
import { useRouter } from 'expo-router';
import Constants from "expo-constants";

import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

export default function ListenAndRepeat() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [history, setHistory] = useState<{ srcImage: string; photographer: string; word: string }[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const key = "6vzxEQM76ToClQfz2INAfSSoNZjKxpdw5ZUEhnbaM4HfoSPw4LGRef5O";
  const [audioSpeed, setAudioSpeed] = useState<number>(1);
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
  const [audioDuration, setAudioDuration] = useState<boolean>(false);
  const [showRepeat, setShowRepeat] = useState<boolean>(false);
  const statusBarHeight = Constants.statusBarHeight;
  const scalePlay = useSharedValue(1);
  const rotationNext = useSharedValue(0);
  const scaleNext = useSharedValue(1);
  const rotationBack = useSharedValue(0);
  const scaleBack = useSharedValue(1);

  const animatedStylePlay = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scalePlay.value }],
    };
  });

  const animatedStyleNext = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotationNext.value}deg` },
        { scale: scaleNext.value }
      ],
    };
  });

  const animatedStyleBack = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotationBack.value}deg` },
        { scale: scaleBack.value }
      ],
    };
  });

  const handlePlayPressIn = () => {
    scalePlay.value = withSpring(0.8);
  };

  const handlePlayPressOut = () => {
    scalePlay.value = withSpring(1);
  };

  const handleNextPressIn = () => {
    rotationNext.value = withSpring(15);
    scaleNext.value = withSpring(0.8);
  };

  const handleNextPressOut = () => {
    rotationNext.value = withSpring(0);
    scaleNext.value = withSpring(1);
  };

  const handleBackPressIn = () => {
    rotationBack.value = withSpring(-15);
    scaleBack.value = withSpring(0.8);
  };

  const handleBackPressOut = () => {
    rotationBack.value = withSpring(0);
    scaleBack.value = withSpring(1);
  };

  useEffect(() => {
    const generateInitialObject = async () => {
      const newObject = await generateObject();
      if (newObject) {
        setHistory((prevHistory) => [...prevHistory, newObject]);
        handlePlay(newObject.word);
      }
    };
    generateInitialObject();
  }, []);

  useEffect(() => {
    if (history[currentIndex]) {
      handlePlay(history[currentIndex].word);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (showRepeat) {
      const wordsPerSecond = audioSpeed * 3; // Aproximadamente 3 palavras por segundo em velocidade normal
      const duration = (history[currentIndex].word.split('').length / wordsPerSecond);
      setTimeout(() => {
        setShowRepeat(false);
      }, (duration * 1000)); // 3000ms = 3s

    }
  }, [showRepeat]);

  const generateImage = async (wordParams: string) => {
    try {
      const response = await axios.get("https://api.pexels.com/v1/search", {
        params: { query: wordParams },
        headers: { Authorization: key },
      });
      return {
        srcImage: response.data.photos[0]?.src.original,
        photographer: response.data.photos[0]?.photographer,
      };
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao gerar imagem");
    }
  };

  const generateWord = async () => {
    try {
      const response = await axios.get("https://random-words-api.vercel.app/word/spanish");
      return {
        word: response.data[0].word,
        definition: response.data[0].definition,
      };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.data.message === "Too many requests, please try again later.") {
          setErrorMessage("Limite de palavras atingido. Por favor, tente novamente em 15 minutos.");
        } else {
          console.error("Erro ao gerar palavra");
          setErrorMessage("Um erro inesperado ocorreu. Por favor, tente novamente.");
        }
      } else {
        console.error("Erro ao gerar palavra");
        setErrorMessage("Um erro inesperado ocorreu. Por favor, tente novamente.");
      }
      throw new Error("Erro ao gerar palavra");
    }
  };

  const generateObject = async () => {
    try {
      const { word, definition } = await generateWord();
      const { srcImage, photographer } = await generateImage(definition);
      return { word, srcImage, photographer };
    } catch (error) {
      console.error(error);
    }
  };

  const handleNext = async () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      const newObject = await generateObject();
      if (newObject) {
        setHistory((prevHistory) => [...prevHistory, newObject]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handlePlay = (wordParams: string) => {
    setAudioDuration(true);
    Speech.speak(wordParams, {
      language: "es",
      voice: "es-ES-language",
      rate: audioSpeed,
      onDone: () => { setAudioDuration(false); setShowRepeat(true) },
    });
  };

  const handleStop = () => {
    Speech.stop();
    setAudioDuration(false);
  };

  return (
    <View>
      {settingsVisible && <SettingsAudio speed={audioSpeed} setSpeed={setAudioSpeed} close={() => setSettingsVisible(false)} />}
      {errorMessage && <PopUp message={errorMessage} setModalVisible={() => setErrorMessage(null)} />}
      {showRepeat && <RepeatVoice />}
      {
        history.length === 0 ? (
          <View className="w-full h-full flex items-center justify-center bg-custom-gray">
            <Text className="text-4xl color-custom-brown font-poppinsSB">Carregando...</Text>
          </View>
        ) : (
          <View className="w-full h-full">
            <View style={{ marginTop: statusBarHeight }} className="flex-row justify-between items-center p-2">
              <TouchableOpacity onPress={() => router.back()}>
                <MaterialCommunityIcons className="p-4 border rounded-full" name="arrow-left" size={27} color="#0E0D26" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSettingsVisible(true)}>
                <AntDesign className="p-5 bg-custom-black rounded-full" name="setting" size={25} color="#FCFAF7" />
              </TouchableOpacity>
            </View>
            <View className="flex-1 justify-between">
              <View className="px-1.5 py-5">
                <Image
                  className="w-full aspect-square rounded-[3rem]"
                  style={{ elevation: 5 }}
                  source={{ uri: history[currentIndex].srcImage }}
                />
                <Text className="font-poppinsL text-xl text-center" style={{ color: "rgba(14, 13, 38, 0.6)" }}>Imagem de {history[currentIndex].photographer} no Pexelss</Text>
              </View>
              <View className="p-10">
                <View className="border-l-2 border-custom-primary py-2 px-3 text-4xl">
                  <Text className="font-poppinsL text-4xl">
                    {history[currentIndex].word.charAt(0).toUpperCase() + history[currentIndex].word.slice(1)}
                  </Text>
                </View>
              </View>
              <View className="flex-row justify-center items-center p-5">
                <Animated.View style={[{ marginRight: -10, zIndex: 1 }, animatedStyleBack]}>
                  <Pressable
                    onPressIn={handleBackPressIn}
                    onPressOut={handleBackPressOut}
                    onPress={handleBack}
                  >
                    <AntDesign
                      className="p-3 bg-custom-primary rounded-full"
                      name="back"
                      size={32}
                      color="#FCFAF7"
                    />
                  </Pressable>
                </Animated.View>
                {
                  audioDuration ? (
                    <Pressable style={{ zIndex: 2, elevation: 4 }}
                      onPress={handleStop}
                      onPressIn={handlePlayPressIn}
                      onPressOut={handlePlayPressOut}
                    >
                      <Animated.View style={[animatedStylePlay, { elevation: 4 }]}>
                        <Entypo className="p-5 bg-custom-primary rounded-full" style={{ elevation: 2 }} name="controller-stop" size={32} color="#FCFAF7" />
                      </Animated.View>
                    </Pressable>
                  ) : (
                    <Pressable style={{ zIndex: 2, elevation: 4 }}
                      onPress={() => handlePlay(history[currentIndex].word)}
                      onPressIn={handlePlayPressIn}
                      onPressOut={handlePlayPressOut}
                    >
                      <Animated.View style={[animatedStylePlay, { elevation: 4 }]}>
                        <Entypo className="p-5 bg-custom-primary rounded-full" style={{ elevation: 2 }} name="controller-play" size={32} color="#FCFAF7" />
                      </Animated.View>
                    </Pressable>

                  )
                }

                <Animated.View style={[{ marginLeft: -10, zIndex: 1 }, animatedStyleNext]}>
                  <Pressable
                    onPressIn={handleNextPressIn}
                    onPressOut={handleNextPressOut}
                    onPress={handleNext}
                  >
                    <AntDesign
                      className="p-3 bg-custom-primary rounded-full"
                      name="back"
                      size={32}
                      color="#FCFAF7"
                      style={{ transform: [{ scaleX: -1 }] }}
                    />
                  </Pressable>
                </Animated.View>
              </View>
            </View>

          </View>
        )
      }
    </View >
  );
}