import { View, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Slider from '@react-native-community/slider';
import { useState } from "react";
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

const SettingsAudio = ({setConfiguration, setSpeed, speed}) => {
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
        <View style={styles.bodyApp}>
            <View style={styles.topContainer}>
                <Icon onPress={() => setConfiguration(false)} name="arrowleft" size={25} color="#000" />
                <Text style={styles.title}>Configuración De Audio</Text>
            </View>
            <View style={styles.containerConf}>
                <View style={styles.card}>
                    <Text  style={styles.titleSpeed}>Velocidad de audio</Text>
                    <View style={styles.containerSpeed}>
                        <Text>{speed.toFixed(1)}</Text>
                        <Slider
                            style={{ width: 177, height: 40 }}
                            minimumValue={0.5}
                            maximumValue={2.0}
                            step={0.1}
                            value={speed}
                            onValueChange={setSpeed}
                            minimumTrackTintColor="#E8C2B7"
                            maximumTrackTintColor="#E8C2B7"
                            thumbTintColor="#9F6057"
                        />
                    </View>

                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    bodyApp: {
        backgroundColor: '#ECECEC',
        height: '100%',
    },
    topContainer: {
        padding: 10,
        gap: 10
    },
    title: {
        fontFamily: "Poppins_700Bold",
        color: '#8F3326',
        fontSize: 23,
        marginLeft: 6
    },
    containerConf: {
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    card: {
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerSpeed : {
        flexDirection: "column",
        alignItems: "center",
    },
    titleSpeed : {
        fontFamily: "Poppins_500Medium",
        color: '#8F3326',
        fontSize: 15,
    }

})

export default SettingsAudio
