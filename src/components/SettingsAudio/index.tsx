import { View, Text, Modal } from 'react-native'
import Slider from '@react-native-community/slider';
import Entypo from '@expo/vector-icons/Entypo';

const SettingsAudio = ({ speed, setSpeed, visible }: { speed: number, setSpeed: (value: number) => void, visible: boolean }) => {
  const handleSpeedChange = (value: number) => {
    setSpeed(value);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={{ backgroundColor: "rgba(14, 13, 38, 0.6)" }} className='absolute inset-0 flex justify-center items-center z-50'>
        <View className='bg-custom-white px-6 py-8 rounded-tr-[6.5rem] absolute bottom-0 w-full'>
          <Text className='font-poppinsSB text-4xl'>Configuração</Text>
          <View className='flex-row mt-8 justify-between items-center'>
            <Text style={{ maxWidth: "50%" }} className='font-poppinsR text-2xl'>Velocidade do audio</Text>
            <View className='flex-col items-center'>
              <Text>{speed.toFixed(1)}</Text>
              <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0.5}
                maximumValue={3.5}
                step={0.1}
                value={speed}
                onValueChange={handleSpeedChange}
                minimumTrackTintColor="#E8C2B7"
                maximumTrackTintColor="#E8C2B7"
                thumbTintColor="transparent" // Make the thumb invisible

              />
            </View>
          </View>
        </View>
      </View>
    </Modal>

  )
}

export default SettingsAudio