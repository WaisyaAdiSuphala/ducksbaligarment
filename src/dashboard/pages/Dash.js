import React from 'react';
import { SectionList, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const home = require('../img/home.png');

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
    drawerLabel: 'Home',
    drawerIcon: () => (
    <Image
      source={home}
      style={styles.icon}
    />
  ),
};
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.viewbox}>
            <Text style={{fontSize:26, textAlign:'center',fontWeight:'500'}}>DUCKS BALI GARMENT</Text>
          </View>
          <Image
            style={styles.back}
            source={require('../img/swipe.png')}
          />
        <View style={{flex:0.09,backgroundColor:'black'}}>
            <Text style={{textAlign:'center',color:'white'}}>@ducks_baligarment.co.id</Text>
          </View>
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   //paddingVertical: 22,
  },
  item: {
    padding: 10,
    fontSize: 14,
    // height: 100
  },

  viewbox:{
    flex:0.5,
    fontSize:20,
    backgroundColor:'#0099ff',
    justifyContent:'center',

  },
  icon: {
    height: 24,
    width: 24
  },
  back:{
    flex:2.2,
    height: 260,
    width:780,
    flexDirection:'column',
    justifyContent:'center',

  },
});
