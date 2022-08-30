import AsyncStorage from '@react-native-async-storage/async-storage';

const save = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('save error:', e);
  }
};
const load = async key => {
  try {
    const jsonStr = await AsyncStorage.getItem(key);
    return jsonStr !== null ? JSON.parse(jsonStr) : null;
  } catch (e) {
    console.error('load error:', e);
  }
};

const clearStore = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error('clear AS:', e);
  }
};

export {save, load, clearStore};
