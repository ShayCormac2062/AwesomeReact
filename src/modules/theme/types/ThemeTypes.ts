export enum ThemeTypes {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}
export type ThemeType = ThemeTypes.LIGHT | ThemeTypes.DARK;
export interface ColorsRepoValues {
  light: string;
  dark: string;
}
export interface ColorsRepo {
  overlay: string;
  backgroundPrimary: string;
  accentDefault: string;
  textPrimary: string;
  textSecondary: string;
}
export enum ColorsKeys {
  overlay = 'overlay',
  backgroundPrimary = 'backgroundPrimary',
  accentDefault = 'accentDefault',
  textPrimary = 'textPrimary',
  textSecondary = 'textSecondary',
}
export interface ThemeContextImpl {
  theme: ThemeType;
  selectTheme: ThemeTypes;
  changeTheme: (value: ThemeTypes) => void;
}
