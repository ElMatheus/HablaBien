"use client";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import AppLoading from 'expo-app-loading';
import { LinearGradient } from "expo-linear-gradient";
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
import { TouchableOpacity } from "react-native-gesture-handler";
const Home = () => {
  const [start, setStart] = useState(false);
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
      <ImageBackground source={require("../../assets/images/AlbedoBase_XL_Generate_a_realistic_image_of_a_green_classroom_1.jpg")} style={styles.containerHome}>
        <Header func={start} setFunc={setStart} classSelection={null} />
        <View style={styles.containerBtn}>
          <LinearGradient
            colors={['transparent', 'rgba(24, 24, 27, 0.5)', '#18181b']}
            locations={[0, 0.2, 1]}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: "auto",
              padding: 10,
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              width: "100%",
            }}>
            <View style={styles.description}>
              <Text style={styles.descriptionTxt} >¡Ejercita tu <Text style={styles.txtEspanhol}>Español</Text> con ejercicios!</Text>
              <TouchableOpacity style={styles.btnIniciar} onPress={() => setStart(!start)}>
                <Text style={styles.txtBtn}>Comenzar</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground >
    )
  };
}
const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: 'relative'
  },
  containerBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    elevation: 2, 
  },
  description: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnIniciar: {
    backgroundColor: '#A7F272',
    padding: 10,
    paddingRight: 40,
    paddingLeft: 40,
    borderRadius: 100,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    color: '#fff',
    marginBottom: 5,
  },
  txtBtn: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
  },
  descriptionTxt: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 28,
    color: '#fff',
    textAlign: 'center'
  },
  txtEspanhol: {
    color: '#A7F272',
  }



});

export default Home;