import * as React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderCard from './Cards/HeaderCard';
import SearchCard from './Cards/SearchCard';
import WorkflowsCard from './Cards/WorkflowsCard'

export const HomeLabel = "Home";

export function HomeIconSelector(focused, color, size) {
  let iconName = focused ? "home" : "home-outline";

  return <Ionicons name={iconName} size={size} color={color} />;
}

const containerStyle = {
  flexDirection: 'column',
  //paddingTop: 10,
  backgroundColor: 'white',
  //paddingBottom: 10,
};

const bodyStyle ={
  backgroundColor: 'Blue'
};


export function HomeScreen() {
  return (
    <View style={containerStyle}>
      <HeaderCard />
      <SearchCard />
      <WorkflowsCard />
    </View>
  );
}