import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import styles from '../styles/styles';
import componentStyles from '../styles/components';
import {Ionicons} from '../libs/vector-icons';
import {colors, fontColors} from '../styles/variables';
import fonts from '../styles/fonts';
import {EvilIcons} from '../libs/vector-icons';

const IconInCircle = ({
  circleSize,
  borderWidth = 2,
  borderColor = 'black',
  ...props
}) => (
  <CircleBorder
    size={circleSize}
    borderWidth={borderWidth}
    borderColor={borderColor}>
    <EvilIcons {...props} />
  </CircleBorder>
);

const CircleBorder = ({size, borderWidth, borderColor, children}) => (
  <View
    style={{
      width: size,
      height: size,
      borderRadius: 0.5 * size,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.terciary,
      borderColor,
      borderWidth,
    }}>
    {children}
  </View>
);

export default function HeaderDrawer({openDrawer, closeDrawer}): JSX.Element {
  return (
    <View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 30,
          paddingTop: 10,
        }}>
        <Text style={[fonts.secondaryMain, fontColors.terciary]}>Menu</Text>
        <View style={{margin: 20, flexDirection: 'row', alignItems: 'center'}}>
          <EvilIcons name="gear" size={41} color={colors.primary} />
          <Pressable onPress={() => closeDrawer()}>
            {/* <EvilIcons name="close" size={24} color={colors.primary} /> */}
            <IconInCircle
              name="close"
              size={30}
              color={colors.secondary}
              borderWidth={1}
              borderColor={colors.terciary}
              circleSize={50}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
