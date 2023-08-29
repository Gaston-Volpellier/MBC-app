import React, {useRef, useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import fonts from '../../styles/fonts';
import {fontColors} from '../../styles/variables';
import componentStyles from '../../styles/components';

const CODE_LENGTH = 4;

export default function CodeInput(props): JSX.Element {
  const {code, setCode} = props;
  const [containerIsFocused, setContainerIsFocused] = useState(false);

  const codeDigitsArray = new Array(CODE_LENGTH).fill(0);

  const toDigitInput = (_value: number, idx: number) => {
    const emptyInputChar = ' ';
    const digit = code[idx] || emptyInputChar;

    const isCurrentDigit = idx === code.length;
    const isLastDigit = idx === CODE_LENGTH - 1;
    const isCodeFull = code.length === CODE_LENGTH;
    const hasContent = idx <= code.length;

    const isFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    const containerFocused =
      containerIsFocused && isFocused
        ? {
            ...componentStyles.inputContainer,
            ...componentStyles.inputContainerFocused,
          }
        : componentStyles.inputContainer;

    const containerStyle = hasContent
      ? {...containerFocused, ...componentStyles.filledInput}
      : containerFocused;

    return (
      <View key={idx} style={containerStyle}>
        <Text style={[fonts.primaryLarger, fontColors.primary]}>{digit}</Text>
      </View>
    );
  };

  const ref = useRef<TextInput>(null);

  const handleOnPress = () => {
    setContainerIsFocused(true);
    ref?.current?.focus();
  };

  const handleOnBlur = () => {
    setContainerIsFocused(false);
  };

  const handleCode = value => {
    setCode(value);
  };

  return (
    <View style={componentStyles.CodeInputContainer}>
      <Pressable
        style={componentStyles.inputsContainer}
        onPress={handleOnPress}>
        {codeDigitsArray.map(toDigitInput)}
      </Pressable>
      <TextInput
        ref={ref}
        value={code}
        onChangeText={value => handleCode(value)}
        onSubmitEditing={handleOnBlur}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        maxLength={CODE_LENGTH}
        style={componentStyles.hiddenCodeInput}
      />
    </View>
  );
}
