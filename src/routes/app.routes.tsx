import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './tab.routes';
import { useTheme } from 'styled-components';

const Stack = createStackNavigator();

const StackRoutes: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={TabRoutes}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: colors.BG_WHITE,
          headerStyle: { backgroundColor: colors.BG_PRIMARY },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
