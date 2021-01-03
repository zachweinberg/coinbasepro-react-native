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
  headerTitleStyle: { fontWeight: 'bold', fontSize: 30 },
  headerTitleContainerStyle: { marginLeft: 10, paddingTop: 10 },
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

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
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
    </>
  );
};

export default App;
