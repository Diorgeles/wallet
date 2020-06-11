import React from 'react';
import { MyBadge } from './styles';

interface BadgeProps {
  onPress?(): void;
  isActiveColor?: string;
  value: string;
}

const Badge: React.FC<BadgeProps> = ({ isActiveColor, value, onPress }) => {
  return (
    <MyBadge
      onPress={onPress}
      isActiveColor={isActiveColor ? isActiveColor : ''}
      value={value}
    />
  );
};

export default Badge;
