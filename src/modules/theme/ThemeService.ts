import ThemeApiRepositories from "./repositories/ThemeApiRepositories";
import { ThemeResponse } from "./models/ThemeResponse";

export default class ThemeService {
  themeApi: ThemeApiRepositories;

  constructor() {
    this.themeApi = new ThemeApiRepositories();
  }

  getTheme = async () => {
    const data = await this.themeApi.getTheme();

    return data.data as ThemeResponse;
  }
}
