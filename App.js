  import React from 'react';
  import { Text, View, Button } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import Inicio from './componentes/inicio';
  import Historico from './componentes/historico';
  import Grafico from './componentes/grafico';
    import addGanho from './componentes/addGanho';




    <View>
      <Inicio/>
      <Historico/>
      <Grafico/>
      <addGanho/>
    </View>


  

  

  
  const Tab = createBottomTabNavigator();
  
  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="initialTab"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={Inicio}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="wallet" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Histórico"
          component={Historico}
          options={{
            tabBarLabel: 'Historico',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="database" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Grafico"
          component={Grafico}
          options={{
            tabBarLabel: 'Gráfico',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  
  export default function App() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
  );
}