import * as React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeLabel, HomeIconSelector, HomeScreen } from './src/HomeScreen';
import { AvisosLabel, AvisosIconSelector, AvisosScreen } from './src/AvisosScreen';
import { ServiciosLabel, ServiciosIconSelector, ServiciosScreen } from './src/ServiciosScreen';

var { height } = Dimensions.get('window');
var box_count = 15;
var box_height = height / box_count;

const Tab = createBottomTabNavigator();

const containerStyle = {
  flex: 1,
  flexDirection: 'column',
  // paddingTop: 45,
  // paddingBottom: 45
};

const options = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === HomeLabel) {
      return HomeIconSelector(focused, color, size);
    } else if (route.name === AvisosLabel) {
      return AvisosIconSelector(focused, color, size);
    } else if (route.name === ServiciosLabel) {
      return ServiciosIconSelector(focused, color, size);
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

export default function App() {
  return (
    <View style={containerStyle}>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={options}
        tabBarOptions={{
          activeTintColor: 'dodgerblue',
          inactiveTintColor: 'lightgray',
        }}
        >
          <Tab.Screen name={HomeLabel} component={HomeScreen} />
          <Tab.Screen name={AvisosLabel} component={AvisosScreen} />
          <Tab.Screen name={ServiciosLabel} component={ServiciosScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}