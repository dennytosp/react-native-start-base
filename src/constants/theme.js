import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  black: '#303030',
  black01: '#222222',
  white: '#FFFFFF',
  dark: '#000',

  green: '#2AA952',
  red: '#EB001B',
  yellow: '#FFCC00',

  light: '#606060',
  light01: '#909090',
  light02: '#808080',

  gray00: '#F0F0F0',
  gray01: '#F6F6F6',
  gray02: '#E8E8E8',
  gray03: '#BDBDBD',
  gray04: '#666666',
  gray05: '#E0E0E0',
  gray06: '#F2F2F2',
};

export const SIZES = {
  base: 10,
  radius: 20,
  width,
  height,
};

export const FONTS = {
  //Primary Fonts
  black: 'NunitoSans-Black',
  bold: 'NunitoSans-Bold',
  extraBold: 'NunitoSans-ExtraBold',
  extraLight: 'NunitoSans-ExtraLight',
  italic: 'NunitoSans-Italic',
  light: 'NunitoSans-Light',
  regular: 'NunitoSans-Regular',
  semiBold: 'NunitoSans-SemiBold',

  //Gelasio Fonts
  gelasioBold: 'Gelasio-Bold',
  gelasioItalic: 'Gelasio-Italic',
  gelasioMedium: 'Gelasio-Medium',
  gelasioRegular: 'Gelasio-Regular',
  gelasioSemiBold: 'Gelasio-SemiBold',
};

const theme = {COLORS, SIZES, FONTS};
export default theme;
