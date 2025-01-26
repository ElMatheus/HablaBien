import { View, Text, Modal, Pressable } from 'react-native'
import Slider from '@/src/components/InputSlider';
import AntDesign from '@expo/vector-icons/AntDesign';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const SettingsAudio = ({ speed, setSpeed, visible, close }: { speed: number, setSpeed: (value: number) => void, visible: boolean, close: () => void }) => {
  const handleSpeedChange = (value: number) => {
    setSpeed(value);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={{ backgroundColor: "rgba(14, 13, 38, 0.6)" }} className='absolute inset-0 z-40' >
        <View className='bg-custom-white px-6 py-8 rounded-tr-[6.5rem] absolute bottom-0 w-full'>
          <View className='flex-row justify-between items-center'>
            <Text className='font-poppinsSB text-4xl'>Configuração</Text>
            <AntDesign onPress={close} className='mr-5' name="arrowdown" size={29} color="#0E0D26" />
          </View>
          <View className='flex-row mt-8 mb-44 justify-between items-center'>
            <Text style={{ maxWidth: "50%" }} className='font-poppinsR text-2xl'>Velocidade do audio</Text>
            <View className='flex-col flex-1 gap-3 px-2'>
              <Text className='font-poppinsR text-xl text-center'>{speed.toFixed(1)}</Text>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <Slider
                  min={0.5}
                  max={3.5}
                  initialValue={speed}
                  onChange={(value) => handleSpeedChange(value)}
                />
              </GestureHandlerRootView>
            </View>
          </View>
        </View>
      </View>

    </Modal >

  )
}

export default SettingsAudio