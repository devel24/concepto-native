import React from "react";
import { Image, ImageBackground, Button, View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";

const buttonStyle = {
  flex: 1,
  justifyContent: 'flex-end',
  padding: 5
}

const containerStyle = {
  flexDirection: "row",
}

const innerContainerStyle = {
  flex: 1,
  flexDirection: "row",
  height: 100,
  marginLeft: 15,
}

const image = { uri: "https://ak.picdn.net/shutterstock/videos/25384697/thumb/11.jpg" };

const imageStyle = {
  height: 100,
};

export default function WorkflowsCard() {
  return (
    <View style={containerStyle}>
      <ImageBackground source={image} style={imageStyle}>
        <ScrollView
          horizontal={true}
          style={innerContainerStyle}
          showsHorizontalScrollIndicator={true} >
          <View style={buttonStyle}>
            <Button title="Checar Entrada" />
          </View>
          <View style={buttonStyle}>
            <Button style={buttonStyle} title="Organigrama" />
          </View>
          <View style={buttonStyle}>
            <Button style={buttonStyle} title="Última Nómina" />
          </View>
          <View style={buttonStyle}>
            <Button style={buttonStyle} title="Solicitar Anticipo" />
          </View>
          <View style={buttonStyle}>
            <Button style={buttonStyle} title="Buzón de Quejas" />
          </View>
          <View style={buttonStyle}>
            <Button style={buttonStyle} title="Solicitar Vacaciones" />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>

  );
}
