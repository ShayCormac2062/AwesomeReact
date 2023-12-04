import AsyncStorage from '@react-native-async-storage/async-storage';
import {LangType} from './LangType';

const LANG_KEY = '@app:language';

class LangLocalRepository {
  static async saveLanguage(lang) {
    try {
      await AsyncStorage.setItem(LANG_KEY, lang);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  }

  static async loadLanguage() {
    try {
      const lang = await AsyncStorage.getItem(LANG_KEY);
      return lang || LangType.EN;
    } catch (error) {
      console.error('Error loading language:', error);
      return LangType.EN;
    }
  }
}

export default LangLocalRepository;
