import {Linking} from 'react-native';

class DeepLinking {
  static handleOpenURL(event) {
    const url = event.url;
    // Обработка события открытия диплинка
    // Извлечение параметров диплинка и навигация в соответствующий раздел приложения
    console.log('Handling deep link:', url);
    // В примере: извлечение параметров из диплинка и принятие соответствующих действий
    const match = url.match(/mypostapp:\/\/auth\/password\/restore\/(\d+)/);
    if (match) {
      const userId = match[1];
      console.log('Restoring password for user ID:', userId);
      // Вызов функции для восстановления пароля или навигации к соответствующему экрану
    }
  }

  static addEventListener() {
    Linking.addEventListener('url', this.handleOpenURL);
  }

  static removeEventListener() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  static async getInitialURL() {
    const initialUrl = await Linking.getInitialURL();
    return initialUrl;
  }

  static openURL(url) {
    Linking.openURL(url);
  }
}

export default DeepLinking;
