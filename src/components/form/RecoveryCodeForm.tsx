import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from '../../styles/styles';
import fonts from '../../styles/fonts';
import componentStyles from '../../styles/components';
import {backgroundColors, fontColors} from '../../styles/variables';
import CodeInput from './CodeInput';
import * as api from '../../services/api';
import {useSession} from '../../utils/SessionProvider';

export default function RecoveryCodeForm(props): JSX.Element {
  const [errorMsg, setErrorMsg] = useState(null);
  const [code, setCode] = useState('');
  const {passwordCode, setPasswordCode} = useSession();

  const handleForm = async () => {
    setErrorMsg(null);
    try {
      const response = await api.validateCode(code);

      if (!response.error) {
        setPasswordCode(code);
        props.navigation.navigate('PasswordReset');
      } else {
        console.log('error logging in: ', response.error);
        setErrorMsg(response.error);
      }
    } catch (error) {
      console.log('Error registering: ', error);
    }
  };

  return (
    <View>
      <View style={styles.mb50}>
        <CodeInput code={code} setCode={setCode} />
      </View>
      <View style={styles.mb10}>
        <Pressable
          style={[
            componentStyles.secondaryButton,
            backgroundColors.quaternary,
            styles.mb10,
            {marginTop: 'auto', maxWidth: 330},
          ]}
          onPress={() => handleForm()}>
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            CONTINUAR
          </Text>
        </Pressable>
        {errorMsg && (
          <View style={[styles.horizontalAlign]}>
            <Text style={[fontColors.danger, fonts.primarySmall, styles.mb10]}>
              {errorMsg}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
