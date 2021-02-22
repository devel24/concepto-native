import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const containerStyle = {
  flexDirection: "column",
  paddingLeft: 25,
  paddingRight: 25
}

const headerStyle = {
  flexDirection: "row",
  marginTop: 10,
}

const bodyStyle = {
  flexDirection: "row",
  margin: 10,
}

const headerTextStyle = {
  flex: 1,
  fontSize: 15,
  fontWeight: "bold",
  color: 'slategray'
}

const masTextStyle = {
  flex: 1,
  fontSize: 10,
  fontWeight: "bold",
  color: 'lightgray',
  textAlign: 'right',
  //backgroundColor: 'red',
  justifyContent: 'flex-end',
}

const imageTextStyle = {
  textAlign: 'center',
  color: 'gray'
}

const imageContainerStyle = {height: 120};
const imageStyle = {width: 80, height: 80, margin: 10, borderRadius: 120/ 2};
const image = { uri: "https://socialtools.me/wp-content/uploads/2016/04/foto-de-perfil.jpg" };
const image2 = { uri: "https://d8bwfgv5erevs.cloudfront.net/cdn/13/images/curso-online-perfil-psicologico-de-una-persona_l_primaria_1_1524733601.jpg" };
const image3 = { uri: "https://www.seoptimer.com/es/blog/wp-content/uploads/2016/05/foto-en-blanco-y-negro.png" };
const image4 = { uri: "https://www.consejosgratis.es/wp-content/uploads/2013/10/aprende-a-redactar-tu-perfil-para-tu-cv-e1490415366715.jpg" };
const image5 = { uri: "https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/10/24/Recortada/img_femartinez_20181010-125104_imagenes_md_otras_fuentes_captura-kcOG-U452531892714hYG-980x554@MundoDeportivo-Web.JPG" };
const image6 = { uri: "https://www.consejosgratis.es/wp-content/uploads/2013/03/las-mejores-dedicatorias-por-el-cumpleanos-de-mi-jefe.jpg" };
const image7 = { uri: "https://lasillavacia.com/sites/default/files/quienesquien/celio%20nieves_0.jpg" };
const image8 = { uri: "http://s3.amazonaws.com/culturacolectiva-storage/ccuploads/2016/07/20561f0bf46d6912ca942ee659ad1f46.jpeg" };

export default function CompanerosCard() {
  return (
    <View style={containerStyle}>
      <View style={headerStyle}>
        <Text style={headerTextStyle}>Compañeros</Text>
        <Text style={masTextStyle}>Ver más</Text>
      </View>
      <View style={bodyStyle}>
        <ScrollView horizontal={true} >
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={image} />
            <Text style={imageTextStyle}>Luisa</Text>
          </View>
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={image2} />
            <Text style={imageTextStyle}>Karla</Text>
          </View>
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={image3} />
            <Text style={imageTextStyle}>Jorge</Text>
          </View>
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={image4} />
            <Text style={imageTextStyle}>Martín</Text>
          </View>
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={image5} />
            <Text style={imageTextStyle}>Leonel</Text>
          </View>
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={image6} />
            <Text style={imageTextStyle}>Pedro</Text>
          </View>
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={image7} />
            <Text style={imageTextStyle}>Samuel</Text>
          </View>
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={image8} />
            <Text style={imageTextStyle}>Alejandra</Text>
          </View>
        </ScrollView>
      </View>
    </View>);
}
