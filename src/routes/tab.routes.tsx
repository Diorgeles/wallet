import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from 'pages/Main';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TabStack = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <TabStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Main') {
            return <Icon name="calendar-plus" size={size} color={color} />;
          } else if (route.name === 'Doctors') {
            return <Icon name="user-md" size={size} color={color} />;
          } else if (route.name === 'Specialties') {
            return <Icon name="user-graduate" size={size} color={color} />;
          } else if (route.name === 'Profile') {
            return <Icon name="user" size={size} color={color} />;
          }
        },
      })}>
      <TabStack.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Consultas',
        }}
      />
      <TabStack.Screen
        name="Doctors"
        component={Main}
        options={{
          title: 'Médicos',
        }}
      />
      <TabStack.Screen
        name="Specialties"
        component={Main}
        options={{
          title: 'Especialidades',
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
