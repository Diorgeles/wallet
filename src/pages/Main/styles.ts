import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.colors.BG_PRIMARY, theme.colors.BG_SECONDARY],
  locations: [0.4, 0.0],
}))`
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const StatusBar = styled.StatusBar.attrs(({ theme }) => ({
  backgroundColor: theme.colors.BG_PRIMARY,
  barStyle: 'light-content',
}))``;
