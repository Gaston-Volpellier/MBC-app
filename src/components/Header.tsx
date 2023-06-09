import React, {useState} from 'react';
import {Image, View, Pressable} from 'react-native';
import styles from '../styles/styles';
import componentStyles from '../styles/components';
import {Ionicons} from '../libs/vector-icons';
import {colors} from '../styles/variables';
import LoginModal from './LoginModal';

export default function Header({openDrawer, closeDrawer}): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={componentStyles.headerContainer}>
      <Pressable onPress={openDrawer}>
        <Ionicons name="md-menu-sharp" size={24} color={colors.primary} />
      </Pressable>
      <Image
        source={require('../../assets/images/MBC_logo.png')}
        style={styles.mainLogo}
      />
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Ionicons name="person-circle" size={42} color={colors.terciary} />
      </Pressable>
      <LoginModal modalVisible={modalVisible} toggleModal={setModalVisible} />
    </View>
  );
}
