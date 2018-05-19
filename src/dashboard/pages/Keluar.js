import React from 'react';

const logout = require('../img/icon/logout1.png');


import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity, 
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import {Actions} from 'react-native-router-flux';

class Data extends React.Component {
  static navigationOptions = {
    title: 'Keluar',
    drawerLabel: 'Keluar',
    drawerIcon: () => (
    <Image
      source={logout}
      style={styles.icon}
    />
  ),
};
  
  constructor(props) {
    super(props);
    this.state = {
      nama_plnt:'',
      jum_plnt: 0,
      status:'',
      
      activityIndicatorLoading: false,
    };
  }

selectDataFromMySQL = () => {
  this.setState({ activityIndicatorLoading: true }, () => {
    fetch('https://bayumega.000webhostapp.com/select.php',
        {
          method: 'GET',
          headers:
          {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              nama_plnt: this.state.nama_plnt,
              jum_plnt: this.state.jum_plnt,
              status: this.state.status,
            }
          )
          }).then((response) => response.json()).then((responseJsonFromServer) => {
            alert(responseJsonFromServer);
            this.setState({ activityIndicatorLoading: false });
          }).catch((error) => {
            console.error(error);
            this.setState({ activityIndicatorLoading: false });
            });
  });
}
home(){
  Actions.login();
}
still() {
  Actions.dash();
}
  render() {
    
    return (
      
      
      <View style={styles.MainContainer}>
        
        <View style={{ padding: 10, backgroundColor: 'white', width: 280 }}>
            <Text>Anda Yakin Ingin Keluar Dari Aplikasi</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.TouchableOpacityStyle}
              onPress={this.home}
            >
              <Text style={styles.TextStyle}>YA</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.TouchableOpacityStyle}
              onPress={this.still}
            >
              <Text style={styles.TextStyle}>TIDAK</Text>
            </TouchableOpacity>
            {
              this.state.activityIndicatorLoading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
            }
       </View>
      </View>
    );
  }
};

  
 
export default StackNavigator({
  
  Data: {
    screen: Data,
  },
});

const styles = StyleSheet.create(
{
  icon: {
    height: 24,
    width: 24
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 30,
  },
  TextInputStyleClass: {
    // textAlign: '',
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#009688',
    borderRadius: 7,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    },
  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#0066ff',
    marginBottom: 20,
    width: '100%',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
 
});

