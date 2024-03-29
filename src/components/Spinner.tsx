import React, {useEffect} from 'react';
import {View, Animated, Easing} from 'react-native';

export default function Spinner() {
  const spinValue = new Animated.Value(0);

  const animateSpin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => animateSpin());
  };
  useEffect(() => {
    animateSpin();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Animated.Image
        style={{transform: [{rotate: spin}]}}
        source={require('../../assets/images/Spinner.png')}
      />
    </View>
  );
}
