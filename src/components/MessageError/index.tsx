import { View, Text, Modal, TouchableOpacity } from 'react-native'

const PopUp = ({ message, setModalVisible }: { message: string, setModalVisible: () => void }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={!!message}
      onRequestClose={setModalVisible}
    >
      <View className="flex-1 justify-center items-center">
        <View className="bg-white p-8 rounded-xl shadow-2xl w-11/12 max-w-md">
          <Text className="text-custom-brown text-xl font-poppinsM mb-4">{message}</Text>
          <TouchableOpacity className="bg-custom-brown py-3 px-6 rounded-full" onPress={setModalVisible}>
            <Text className="text-white text-center text-lg font-poppinsM">OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default PopUp