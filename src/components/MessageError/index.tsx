import { View, Text, Modal, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const PopUp = ({ message, setModalVisible }: { message: string, setModalVisible: () => void }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={!!message}
      onRequestClose={setModalVisible}
    >
      <View style={{ backgroundColor: "rgba(14, 13, 38, 0.9)" }} className="flex-1 justify-center items-center ">
        <View className='bg-custom-white px-10 py-5 m-10 rounded-3xl items-center flex-col gap-4 '>
          <AntDesign className='bg-custom-black p-4 rounded-full' name="warning" size={24} color="#FCFAF7" />
          <View className='flex-col items-center gap-2'>
            <Text className='font-poppinsB text-2xl'>Ocorreu um erro!</Text>
            <Text className='font-poppinsM text-lg text-center'>{message}</Text>
          </View>
          <TouchableOpacity className='bg-custom-primary py-2 px-3 rounded-full' onPress={setModalVisible}>
            <Text className='font-poppinsM text-lg color-custom-white'>Atualizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default PopUp