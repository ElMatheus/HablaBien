import axios from "axios";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Speech from 'expo-speech';
import PopUp from "@/src/components/MessageError";
import SettingsAudio from "@/src/components/SettingsAudio";
import RepeatVoice from "@/src/components/RepeatVoice";
import { useRouter } from 'expo-router';

export default function ListenAndRepeat() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [history, setHistory] = useState<{ srcImage: string; photographer: string; word: string }[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const key = process.env.PEXELS_API_KEY;
  const [audioSpeed, setAudioSpeed] = useState<number>(1);
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
  const [audioDuration, setAudioDuration] = useState<boolean>(false);
  const [showRepeat, setShowRepeat] = useState<boolean>(false);

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
        headers: { Authorization: process.env.PEXELS_API_KEY },
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
          <View className="w-full h-full flex flex-col  z-10  bg-white">
            <View className="flex flex-row p-5 pb-7  bg-white justify-center items-center">
              <Entypo className="absolute left-1" onPress={() => router.back()} name="chevron-small-left" size={40} color="#8F3326" />
              <Text className="text-2xl font-poppinsB color-custom-brown">Ouça e Repita</Text>
            </View>
            <View style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }} className=" bg-custom-gray rounded-t-3xl justify-between flex-1">
              <View>
                <Image style={{ borderTopLeftRadius: 45, borderTopRightRadius: 45 }} source={{ uri: history[currentIndex].srcImage }} className="w-auto aspect-square" />
                <Text className="color-custom-brown text-lg text-center font-poppinsM">
                  Imagem capturada por {history[currentIndex].photographer} no Pexels
                </Text>
              </View>
              <View className="p-5">
                <Text className="text-4xl color-custom-brown font-poppinsSB">
                  {history[currentIndex].word.charAt(0).toUpperCase() + history[currentIndex].word.slice(1)}
                </Text>
              </View>
              <View className="flex flex-row justify-around mb-7">
                <TouchableOpacity onPress={handleBack}>
                  <Entypo className="bg-white p-3 rounded-full" name="level-up" size={45} color="#9F6057" />
                </TouchableOpacity>
                {
                  audioDuration ? (
                    <TouchableOpacity onPress={handleStop}>
                      <Entypo className="bg-white p-3 rounded-full" name="controller-paus" size={45} color="#9F6057" />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => handlePlay(history[currentIndex].word)}>
                      <Entypo className="bg-white p-3 rounded-full" name="controller-play" size={45} color="#9F6057" />
                    </TouchableOpacity>
                  )
                }
                <TouchableOpacity onPress={handleNext}>
                  <Entypo className="bg-white p-3 rounded-full" name="level-down" size={45} color="#9F6057" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSettingsVisible(true)}>
                  <AntDesign className="bg-white p-3 rounded-full" name="setting" size={45} color="#9F6057" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
      }
    </View>
  );
}
