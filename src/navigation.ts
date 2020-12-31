import { Options, Navigation } from 'react-native-navigation';
import Routes from './routes';

export interface NavigationComponentOptions<P> {
  options?: (passProps?: P) => Options;
}

export type NavigationComponent<P = {}> = React.FunctionComponent<
  P & {
    componentId: string;
  }
> &
  NavigationComponentOptions<P>;

export const setMainAsRoot = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'COINBASE_PRO_BOTTOM_TABS',
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: Routes.MarketsScreen,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('./assets/bar.png'),
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: Routes.PortfolioScreen,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('./assets/chart.png'),
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: Routes.OrdersScreen,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('./assets/orders.png'),
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: Routes.AccountScreen,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('./assets/person.png'),
                },
              },
            },
          },
        ],
      },
    },
  });

// export const setAuthAsRoot = () => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: Routes.AuthScreen,
//             },
//           },
//         ],
//       },
//     },
//   });
// };

export const navigateTo = (
  componentId: string,
  route: Routes,
  passProps: any = {},
) =>
  Navigation.push(componentId, {
    component: {
      name: route,
      passProps,
    },
  });

export const showModal = (
  componentId: string,
  route: Routes,
  passProps: any = {},
) => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: route,
            passProps,
          },
        },
      ],
    },
  });
};

export const dismissModal = (componentId: string) => {
  Navigation.dismissModal(componentId);
};
