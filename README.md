# Quickstart
> npm install
> react-native link


# Usage
Example for custom bottom tab

```markdown
export const RootNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Search: {
            screen: SearchScreen
        },
        Cart: {
            screen: CartScreen
        },
        Setting: {
            screen: SettingScreen
        }
    },
    {
        tabBarComponent: props => <BottomTab {...props} />,
        initialRouteName: "Home",
        headerMode: "none"
    }
);

export const AppNavigator = createAppContainer(RootNavigator);
```

## Refrence Links
- <https://reactnavigation.org/docs/en/bottom-tab-navigator.html>
