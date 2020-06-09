import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from 'pages/Main';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'styled-components';

const TabStack = createBottomTabNavigator();
interface IconProps {
  name: string;
  size: number;
  color: string;
}

const renderIcon = ({ name, size, color }: IconProps) => {
  return <Icon name={name} size={size} color={color} />;
};

const TabRoutes: React.FC = () => {
  const { colors, fonts } = useTheme();
  return (
    <TabStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Main':
              return renderIcon({ name: 'home', size, color });
            case 'Doctors':
              return renderIcon({ name: 'pie-chart', size, color });
            case 'Add':
              return renderIcon({ name: 'add-circle', size, color });
            case 'Wallets':
              return renderIcon({
                name: 'account-balance-wallet',
                size,
                color,
              });
            case 'Profile':
              return renderIcon({
                name: 'account-circle',
                size,
                color,
              });
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.BG_PRIMARY,
        inactiveTintColor: colors.TEXT_DISABLE,
        labelStyle: { fontFamily: fonts[700], fontSize: 12 },
      }}>
      <TabStack.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Dashboard',
        }}
      />
      <TabStack.Screen
        name="Doctors"
        component={Main}
        options={{
          title: 'Gráficos',
        }}
      />
      <TabStack.Screen
        name="Add"
        component={Main}
        options={{
          title: 'Adicionar',
        }}
      />
      <TabStack.Screen
        name="Wallets"
        component={Main}
        options={{
          title: 'Carteiras',
        }}
      />
      <TabStack.Screen
        name="Profile"
        component={Main}
        options={{
          title: 'Perfil',
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabRoutes;
