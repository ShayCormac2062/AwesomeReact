import {makeAutoObservable} from 'mobx';

class LangStore {
  language = 'ru';

  constructor() {
    makeAutoObservable(this);
  }

  setLanguage(lang) {
    this.language = lang;
  }
}

export default new LangStore();
