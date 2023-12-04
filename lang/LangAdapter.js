import LangStore from './LangStore';
import LangLocalRepository from './LangLocalRepository';

class LangAdapter {
  static async init() {
    const lang = await LangLocalRepository.loadLanguage();
    LangStore.setLanguage(lang);
  }

  static async setLanguage(lang) {
    LangStore.setLanguage(lang);
    await LangLocalRepository.saveLanguage(lang);
  }
}

export default LangAdapter;
