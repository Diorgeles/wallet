import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { FlatList, Dimensions } from 'react-native';
import {
  Divider as ElementsDivider,
  Text as ElementsText,
} from 'react-native-elements';

const { height } = Dimensions.get('window');
console.log('height', height * 0.2);

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.colors.BG_PRIMARY, theme.colors.BG_SECONDARY],
  locations: [0.4, 0.0],
}))`
  flex: 1;
`;

export const StatusBar = styled.StatusBar.attrs(({ theme }) => ({
  backgroundColor: theme.colors.BG_PRIMARY,
  barStyle: 'light-content',
}))``;

/**
 * Height vai ser uma animação de abertura do chart
 */
export const ContentChart = styled.View`
  margin: ${height * 0.3}px 15px 0px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.BG_WHITE};
  border-radius: 12px;
  elevation: 5;
`;

export const ContentChartHeader = styled.View`
  /* background-color: ${({ theme }) => theme.colors.BG_SEPARATOR}; */
  height: 130px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const Divider = styled(ElementsDivider)`
  background-color: ${({ theme }) => theme.colors.BG_SEPARATOR};
`;

export const Text = styled(ElementsText)`
  color: ${({ theme }) => theme.colors.PRIMARY};
  text-align: center;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts[700]};
  letter-spacing: 1px;
  margin-top: 15px;
`;

export const ContentLastEntries = styled.View`
  margin: 20px 15px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.BG_WHITE};
  border-radius: 12px;
  elevation: 5;
`;

export const ContentLastEntriesFlatList = styled(FlatList)``;
