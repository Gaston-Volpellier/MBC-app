import React from 'react';
import {Modal, View, TouchableOpacity} from 'react-native';
import componentStyles from '../styles/components';

export default function ModalContainer({
  toggleModal,
  modalVisible,
  children,
}): JSX.Element {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => toggleModal(!modalVisible)}>
      <TouchableOpacity
        style={componentStyles.backDrop}
        onPress={() => toggleModal(!modalVisible)}
      />
      <View style={componentStyles.modalView}>{children}</View>
    </Modal>
  );
}
