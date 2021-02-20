import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const AvisosLabel = "Avisos";

export function AvisosIconSelector(focused, color, size) {
  let iconName = focused ? "megaphone" : "megaphone-outline";

  return <Ionicons name={iconName} size={size} color={color} />;
}

export function AvisosScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
};