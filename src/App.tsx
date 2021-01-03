import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import 'react-native-gesture-handler';
import Routes from './routes';
import MarketsScreen from './screens/Markets';
import PortfolioScreen from './screens/Portfolio';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MarketsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Markets} component={MarketsScreen} />
  </Stack.Navigator>
);

const PortfolioStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Portfolio} component={PortfolioScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Routes.Markets}
        tabBarOptions={{
          activeTintColor: '#d5d5d5',
          inactiveTintColor: '#4a4a4a',
          showLabel: false,
          style: { backgroundColor: '#0e0e0e', borderTopWidth: 0 },
        }}>
        <Tab.Screen
          name={Routes.Markets}
          component={MarketsStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/bar.png')}
                style={{ height: 25, width: 25, tintColor: color }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.Portfolio}
          component={PortfolioStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/chart.png')}
                style={{ height: 25, width: 25, tintColor: color }}
                resizeMode="contain"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
