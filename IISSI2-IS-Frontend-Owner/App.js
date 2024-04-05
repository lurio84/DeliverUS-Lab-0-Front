import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { navigationTheme } from './src/styles/GlobalStyles'

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator screenOptions={({ route }) => ({
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({ color, size }) => {
          let iconName
          if (route.name === 'Restaurants') {
            iconName = 'silverware-fork-knife'
          } else if (route.name === 'Control Panel') {
            iconName = 'view-dashboard'
          } else if (route.name === 'Profile') {
            iconName = 'account-circle'
          }
          return <MaterialCommunityIcons name={iconName} color={color} size={size} />
        },
        headerShown: false
      })}>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
