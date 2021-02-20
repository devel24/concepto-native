import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ServiciosLabel = "Servicios";

export function ServiciosIconSelector(focused, color, size) {
    let iconName = focused ? "chatbubbles" : "chatbubbles-outline";

    return <Ionicons name={iconName} size={size} color={color} />;
}

export function ServiciosScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Servicios!</Text>
        </View>
    );
}