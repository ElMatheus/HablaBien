import { StyleSheet, View, Text } from "react-native";
import { BlurView } from "expo-blur";
import Icon from 'react-native-vector-icons/Entypo';
import { Link } from "expo-router";
import AppLoading from 'expo-app-loading';
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

const Header = ({ func, setFunc, classSelection }) => {
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
            func == false ? (
                classSelection == null ? (
                    <BlurView intensity={40} tint="dark" >
                        <View style={styles.header}>
                            <Text style={styles.titleHeader}>HablaBien</Text>
                            <Icon onPress={() => setFunc(!func)} size={18} color="#fff" name="chevron-thin-up" style={{ transform: [{ rotate: '180deg' }] }} />
                        </View>
                    </BlurView >
                ) : (
                    <BlurView style={styles.blur2} intensity={40} tint="dark" >
                        <View style={styles.header}>
                            <Text style={styles.titleHeader}>HablaBien</Text>
                            <Icon onPress={() => setFunc(!func)} size={18} color="#fff" name="chevron-thin-up" style={{ transform: [{ rotate: '180deg' }] }} />
                        </View>
                    </BlurView >
                )

            ) : (
                <BlurView style={styles.blur} intensity={40} tint="dark" >
                    <View style={styles.headerSelection}>
                        <Text style={styles.titleHeader}>HablaBien</Text>
                        <Icon onPress={() => setFunc(!func)} size={18} color="#fff" name="chevron-thin-up" />
                    </View>
                    <View style={styles.listenAndRepeatContainer}>
                        <View style={styles.txtHeaderLinks}>
                            <Link href={"../ListenAndRepeat/page"} style={styles.textoLink} >Escucha y Repite</Link>
                        </View>
                    </View>
                </BlurView >

            )
        )
    }
};
const styles = StyleSheet.create({
    containerHeader: {
        flex: 1,
        flexDirection: 'column',

    },
    textoLink: {
        color: '#fff',
        fontFamily: 'Poppins_500Medium_Italic',
        fontSize: 17,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        paddingBottom: 4,
    },
    txtHeaderLinks: {
        padding: 18,

    },
    listenAndRepeatContainer: {
        position: 'absolute',
        top: 30,
        left: 0,
        right: 0,
        padding: 12,
    },
    blur: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        flex: 1,
        flexDirection: 'column',
        top: 0,
        left: 0,
        zIndex: 99,
        elevation: 99, // Add this line

    },
    blur2: {

        position: 'absolute',
        flex: 1,
        flexDirection: 'column',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        elevation: 2, // Add this line

    },
    header: {
        padding: 12,
        backgroundColor: 'transparent',
        flexDirection: 'row', // Change this line
        justifyContent: 'space-between',
    },
    titleHeader: {
        color: '#fff',
        fontFamily: 'Poppins_500Medium_Italic',
        backgroundColor: 'transparent',
    },
    headerSelection: {
        padding: 12,
        height: "100%",
        flexDirection: 'row', // Change this line
        justifyContent: 'space-between'
    }
});

export default Header
