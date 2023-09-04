import CryptoJS from 'crypto-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hashPassword = (value: String) => {
  const hash = CryptoJS.SHA1(value).toString();
  return hash;
};

export const storeData = async (token: string, value: any) => {
  try {
    await AsyncStorage.setItem(token, value);
  } catch (e) {
    console.log('Error storing data: ', e);
  }
};

export const clearAllAsyncData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Clearing Async Data...');
  } catch (e) {
    console.log('Error clearing Async data: ', e);
  }
};
