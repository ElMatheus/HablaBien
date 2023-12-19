import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";
import { useFonts } from 'expo-font';



const Home = () => {
  const [fontsLoaded] = useFonts({
    'Poppins': require('../../fonts/Poppins-LightItalic.ttf'),
  });
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>HablaBien</Text>
      </View>




      <Text>dsdsd</Text>
      <Link href="/ListenAndRepeat/page">teste</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 12,
    
    
  },
  titleHeader: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
});

export default Home
