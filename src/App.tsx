/* eslint-disable react-native/no-inline-styles */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { Image, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import Routes from './routes';
import MarketsScreen from './screens/Markets';
import PortfolioScreen from './screens/Portfolio';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions: StackHeaderOptions = {
  headerTitleAlign: 'left',
  headerStyle: {
    backgroundColor: 'black',
    shadowColor: 'transparent',
  },
  headerTintColor: 'white',
  headerTitleStyle: { fontWeight: 'bold', fontSize: 35 },
  headerTitleContainerStyle: {
    paddingLeft: 2,
    paddingTop: 10,
  },
};

const tabBarOptions = {
  activeTintColor: '#d5d5d5',
  inactiveTintColor: '#4a4a4a',
  showLabel: false,
  style: {
    paddingHorizontal: 65,
    backgroundColor: '#0b0b0b',
    borderTopWidth: 0,
  },
};

const MarketsStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name={Routes.Markets} component={MarketsScreen} />
  </Stack.Navigator>
);

const PortfolioStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name={Routes.Portfolio} component={PortfolioScreen} />
  </Stack.Navigator>
);

const renderTabIcon = (icon: any, color: string) => {
  return (
    <Image
      source={icon}
      style={{ height: 30, width: 30, tintColor: color }}
      resizeMode="contain"
    />
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={Routes.Markets}
          tabBarOptions={tabBarOptions}>
          <Tab.Screen
            name={Routes.Markets}
            component={MarketsStack}
            options={{
              tabBarIcon: ({ color }) =>
                renderTabIcon(require('./assets/bar.png'), color),
            }}
          />
          <Tab.Screen
            name={Routes.Portfolio}
            component={PortfolioStack}
            options={{
              tabBarIcon: ({ color }) =>
                renderTabIcon(require('./assets/chart.png'), color),
            }}
          />
          <Tab.Screen
            name={Routes.Orders}
            component={PortfolioStack}
            options={{
              tabBarIcon: ({ color }) =>
                renderTabIcon(require('./assets/orders.png'), color),
            }}
          />
          <Tab.Screen
            name={Routes.Account}
            component={PortfolioStack}
            options={{
              tabBarIcon: ({ color }) =>
                renderTabIcon(require('./assets/person.png'), color),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
