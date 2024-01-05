import { View, Image, Button, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import allObjects from "../../data/exercises/objects.js";
import AppLoading from 'expo-app-loading';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';
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
                <View>
                    <Image style={styles.imgAudio} source={{ uri: unseenObjects[numberPage]?.image }} />
                    <Text style={styles.descImg}>{unseenObjects[numberPage]?.authorCredits}</Text>
                </View>
                <View>
                    <Text style={styles.title}>{unseenObjects[numberPage]?.name}</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Icon name="setting" size={40} color="#525252"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconE name="controller-play" size={40} color="#525252" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconE name="cw" size={40} color="#525252" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconE name="level-down" size={40} color="#525252" />
                    </TouchableOpacity>
                </View>
                {/* <Button title="Next" onPress={nextPage} /> */}
            </View>
        )
    }
};
const styles = StyleSheet.create({
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
        color: '#525252',
        textAlign: 'center',
        marginTop: 7,
        fontSize: 13,
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#525252',
        marginTop: 7,
        fontSize: 27,
        marginLeft: 20,
    }
});

export default ListenAndRepeat