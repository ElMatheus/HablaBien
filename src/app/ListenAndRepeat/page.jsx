import { View, Image, Button, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import SettingsAudio from "../components/SettingsAudio.jsx";
import allObjects from "../../data/exercises/objects.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';
import Header from "../components/Header";
import IconE from 'react-native-vector-icons/Entypo';
import * as Speech from 'expo-speech';
import RepeatVoice from "../components/RepeatVoice.jsx";


import {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

const ListenAndRepeat = () => {
    const [start, setStart] = useState(false);
    const [unseenObjects, setUnseenObjects] = useState([...allObjects]);
    const [numberPage, setNumberPage] = useState(Math.floor(Math.random() * unseenObjects.length));
    const [configuration, setConfiguration] = useState(false);
    const [speedVoice, setSpeedVoice] = useState(1.0);
    const [showRepeat, setShowRepeat] = useState(false);
    const text = unseenObjects[numberPage]?.name;
    const wordsPerSecond = speedVoice * 3; // Aproximadamente 3 palavras por segundo em velocidade normal
    const duration = (text.split('').length / wordsPerSecond);

    const nextPage = () => {
        unseenObjects.splice(numberPage, 1);
        setUnseenObjects([...unseenObjects]);
        if (unseenObjects.length === 0) {
            setUnseenObjects([...allObjects]);
        }
        setNumberPage(Math.floor(Math.random() * unseenObjects.length));
    }

    const handleSpeek = () => {
        Speech.speak(unseenObjects[numberPage]?.name, {
            language: "es",
            voice: "es-ES-language",
            rate: speedVoice,
            onDone: () => setShowRepeat(true)
        });
    }

    useEffect(() => {
        setNumberPage(Math.floor(Math.random() * unseenObjects.length));
    }, [unseenObjects]);

    useEffect(() => {
        if (showRepeat) {
            const timer = setTimeout(() => {
                setShowRepeat(false);
            }, (duration * 1000)); // 3000ms = 3s

        }
    }, [showRepeat]);


    let [fontsLoaded] = useFonts({
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
        Poppins_900Black,
        Poppins_900Black_Italic,
    });

    return (
        showRepeat == true ? (
            <RepeatVoice />
        ) : configuration == false ? (
            <View style={styles.screen}>
                <Header func={start} setFunc={setStart} classSelection={"blur2"} />
                <View>
                    <Image style={styles.imgAudio} source={{ uri: unseenObjects[numberPage]?.image }} />
                    <Text style={styles.descImg}>{unseenObjects[numberPage]?.authorCredits}</Text>
                </View>
                <View>
                    <Text style={styles.title}>{unseenObjects[numberPage]?.name}</Text>
                </View>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => setConfiguration(true)} style={styles.iconAudio}>
                        <Icon name="setting" size={45} color="#9F6057" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSpeek} style={styles.iconAudio}>
                        <IconE name="controller-play" size={45} color="#9F6057" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={nextPage} style={styles.iconAudio}>
                        <IconE name="level-down" size={45} color="#9F6057" />
                    </TouchableOpacity>
                </View>
            </View>
        ) : configuration == true ? (
            <SettingsAudio setConfiguration={setConfiguration} setSpeed={setSpeedVoice} speed={speedVoice} />
        ) : null
    )
}
const styles = StyleSheet.create({
    screen: {
        height: '100%',
        backgroundColor: '#ECECEC',

        position: 'relative',
        zIndex: 1,
        elevation: 1,
    },
    imgAudio: {
        width: "auto",
        aspectRatio: 1 / 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        marginLeft: 5,
        marginRight: 5,
    },
    descImg: {
        fontFamily: 'Poppins_300Light',
        color: '#8F3326',
        textAlign: 'center',
        marginTop: 7,
        fontSize: 13,
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#8F3326',
        marginTop: 12,
        fontSize: 27,
        marginLeft: 20,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderRadius: 40,
        position: 'absolute',
        bottom: 10,
        left: 5,
        right: 5,

    },
    iconAudio: {
        borderRadius: 100,
        backgroundColor: '#fff',
        padding: 10,
        backgroundColor: '#fff',
    }
});

export default ListenAndRepeat