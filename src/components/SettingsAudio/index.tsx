import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider';
import Entypo from '@expo/vector-icons/Entypo';

const SettingsAudio = ({ speed, setSpeed, close }: { speed: number, setSpeed: (value: number) => void, close: () => void }) => {
  const handleSpeedChange = (value: number) => {
    setSpeed(value);
  };

  return (
    <View className='bg-custom-gray h-full z-50'>
      <View className='p-10 gap-10'>
        <Entypo onPress={close} name="chevron-small-left" size={40} color="#000" />
        <Text className='font-poppinsB text-custom-brown text-4xl'>Configuração de audio</Text>
      </View>
      <View className='bg-white p-5 m-5 rounded-lg'>
        <View className='p-3 flex-row justify-between items-center'>
          <Text className='font-poppinsM text-custom-brown text-base'>Velocidade do audio</Text>
          <View className='flex-col items-center'>
            <Text className='font-poppinsM'>{speed.toFixed(1)}</Text>
            <Slider
              style={{ width: 177, height: 40 }}
              minimumValue={0.5}
              maximumValue={3.5}
              step={0.1}
              value={speed}
              onValueChange={handleSpeedChange}
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

export default SettingsAudio