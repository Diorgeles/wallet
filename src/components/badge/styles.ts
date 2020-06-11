import { Badge } from 'react-native-elements';
import styled from 'styled-components/native';

interface MyBadgeProps {
  isActiveColor: string;
}

export const MyBadge = styled(Badge).attrs<MyBadgeProps>(
  ({ theme, isActiveColor }) => ({
    badgeStyle: {
      marginHorizontal: 15,
      marginVertical: 10,
      height: 35,
      padding: 10,
      borderRadius: 40,
      backgroundColor: isActiveColor
        ? isActiveColor
        : theme.colors.BG_SECONDARY,
    },
    textStyle: {
      fontFamily: theme.fonts[700],
      fontSize: 14,
      color: isActiveColor ? theme.colors.BG_WHITE : theme.colors.PRIMARY,
    },
  }),
)<MyBadgeProps>``;
