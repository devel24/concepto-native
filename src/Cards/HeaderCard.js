import * as React from 'react';
import { Text, View, Image } from 'react-native';

const viewStyle = { 
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 10,
    // backgroundColor: 'blue'
};

const textStyle = {
    flex: 1, 
    fontSize: 20,
    fontWeight: "bold",
    color: 'slategray'
}

const innerViewStyle = {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center'
}

const imageStyle = {width: 40, height: 40, borderRadius: 60/ 2};
const image = { uri: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg" };

export default function HomeScreen() {
  return (
    <View style={viewStyle}>
        <View style={innerViewStyle}>
            <Text style={textStyle}>Hola Patricia</Text>
        </View>
        <Image style={imageStyle} source={image} />
    </View>
  );
}