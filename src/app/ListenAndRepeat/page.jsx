import { View, Image, Button, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import allObjects from "../../data/exercises/objects.js";
import AppLoading from 'expo-app-loading';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';
import Header from "../components/Header";
import IconE from 'react-native-vector-icons/Entypo';
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

    const nextPage = () => {
        unseenObjects.splice(numberPage, 1);
        setUnseenObjects([...unseenObjects]);
        if (unseenObjects.length === 0) {
            setUnseenObjects([...allObjects]);
        }
        setNumberPage(Math.floor(Math.random() * unseenObjects.length));
    }

    useEffect(() => {
        setNumberPage(Math.floor(Math.random() * unseenObjects.length));
    }, [unseenObjects]);

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
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View>

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
                    <TouchableOpacity style={styles.iconAudio}>
                        <Icon name="setting" size={45} color="#547326" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconAudio}>
                        <IconE name="controller-play" size={45} color="#547326" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconAudio}>
                        <IconE name="cw" size={45} color="#547326" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconAudio}>
                        <IconE name="level-down" size={45} color="#547326" />
                    </TouchableOpacity>
                </View>
                {/* <Button title="Next" onPress={nextPage} /> */}
            </View>
                </View>

        )
    }
};
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
        color: '#1C260D',
        textAlign: 'center',
        marginTop: 7,
        fontSize: 13,
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#1C260D',
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