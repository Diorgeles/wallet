import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './tab.routes';

const Stack = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={TabRoutes}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
