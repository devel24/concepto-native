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
const image = { uri: "https://cdn2.iconfinder.com/data/icons/metro-ui-icon-set/512/PowerPoint_15.png" };
const image2 = { uri: "https://es.seaicons.com/wp-content/uploads/2015/08/Excel-icon3.png" };
const image3 = { uri: "https://i.pinimg.com/originals/67/51/12/6751123e2f88a98f5510776501691c11.png" };
const image4 = { uri: "https://eucariotacdn.azureedge.net/wp-content/uploads/2020/01/PowerBI.jpg" };
const image5 = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePsy_5SDdpE3kiE1wI6la3Nnk3mUmaku3QQ&usqp=CAU" };
const image6 = { uri: "https://cdn.iconscout.com/icon/free/png-256/sap-5-569505.png" };
const image7 = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRpBXYPXC85wCo1zbnX4_z1fz1brytPly2w&usqp=CAU" };

export default function CompanerosCard() {
  return (
    <View style={containerStyle}>
      <View style={headerStyle}>
        <Text style={headerTextStyle}>Apps de trabajo</Text>
        <Text style={masTextStyle}>Ver más</Text>
      </View>
      <View style={bodyStyle}>
        <ScrollView horizontal={true} >
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={image} />
            <Text style={imageTextStyle}>Power Point</Text>
          </View>
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={image2} />
            <Text style={imageTextStyle}>Excel</Text>
          </View>
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={image3} />
            <Text style={imageTextStyle}>Freshdesk</Text>
          </View>
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={image4} />
            <Text style={imageTextStyle}>Power BI</Text>
          </View>
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={image5} />
            <Text style={imageTextStyle}>Project</Text>
          </View>
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={image6} />
            <Text style={imageTextStyle}>SAP</Text>
          </View>
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={image7} />
            <Text style={imageTextStyle}>Oracle</Text>
          </View>
        </ScrollView>
      </View>
    </View>);
}
