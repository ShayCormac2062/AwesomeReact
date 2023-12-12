export default class ThemeApiRepositories {
  getTheme = async () => {
    return new Promise<{ data: { theme: String } }>( resolve => {
        resolve({
          data: {
            theme: 'light'
          }
        })
      }
    );
  };
}
