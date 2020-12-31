import { Navigation } from 'react-native-navigation';
import Routes from './routes';
import { NavigationComponent, setMainAsRoot } from './navigation';
import PortfolioScreen from './screens/Portfolio';
import OrdersScreen from './screens/Orders';
import AccountScreen from './screens/Account';
import MarketsScreen from './screens/Markets';

// Register screen components
const map = new Map<Routes, NavigationComponent<any>>();

// Add screens
map.set(Routes.PortfolioScreen, PortfolioScreen);
map.set(Routes.OrdersScreen, OrdersScreen);
map.set(Routes.AccountScreen, AccountScreen);
map.set(Routes.MarketsScreen, MarketsScreen);

map.forEach((ScreenComponent, route) => {
  Navigation.registerComponent(route, () => ScreenComponent);
});

// Listen for project start event
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
      style: 'light',
      drawBehind: true,
    },
    topBar: {
      drawBehind: true,
      background: {
        color: 'black',
        translucent: true,
      },
      largeTitle: {
        visible: true,
        color: 'white',
      },
    },
    bottomTab: {
      iconColor: '#636363',
      selectedIconColor: 'white',
      textColor: '#636363',
      selectedTextColor: 'white',
    },
    bottomTabs: {
      drawBehind: true,
      backgroundColor: '#0a0a0a',
    },
  });

  setMainAsRoot();
});
