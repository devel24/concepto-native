import React from "react";
import { ImageBackground, Button, View } from "react-native";
import ViewOverflow from 'react-native-view-overflow';

const containerStyle = {
    // flex: 1,
    flexDirection: "row",
    paddingHorizontal:10,
  }

const imageStyle = {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 100
  }

const innerContainerStyle = {
    flex: 1,
    flexDirection: "column"
  }

  const buttonStyle = {
      flex: 1,
      marginLeft: 10,
    //   backgroundColor:"blue"
  }

const App = () => (
    <ViewOverflow style={containerStyle}>
        <View style={buttonStyle}>
            <Button title="Checar Entrada" />
        </View>
        <View style={buttonStyle}>
            <Button style={buttonStyle} title="Organigrama" />
        </View>
        <View style={buttonStyle}>
            <Button style={buttonStyle} title="Última Nómina" />
        </View>
    </ViewOverflow>
);

export default App;