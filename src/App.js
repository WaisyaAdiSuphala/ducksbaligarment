import React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

const profile = require('./img/profile.png');

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Menu Utama</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
constructor(props) {
    super(props);
    this.state = {
      nama: '',
    };
  }
  render() {
    return (
      <View style={styles.containerMain}>
        <Button
          title="Halaman Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
          color="#000"
          

        />
        <Text style={{textAlign: 'center'}}>Masukan Nama</Text>
        <TextInput
                style={{ height: 40, width: 150, textAlign: 'center' }}
              placeholder="Masukan Nama "
              onChangeText={(nama) => this.setState({ nama })}
            />
        <Button 
              onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Detail', {
              nama: this.state.nama,
            });
          }}
              title="Sapa nama"
              color="black"
            />
     </View> 
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  render() {
    return (
      <View style={styles.containerMain}>
      <View style={styles.iconContainer}>
          <Image source={profile} style={styles.icon} />
       </View>
        <Text>Ini Halaman Profile</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
          color="black"
        />
      </View>
    );
  }
}

class DetailScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  render() {
    const { params } = this.props.navigation.state;
    const nama = params ? params.nama : null;
    return (
      <View style={styles.containerMain}>
        <Text>Halo {JSON.stringify(nama)} apa kabar?</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
          color="black"
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#BBDEFB',
    borderColor: '#BBDEFB',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    height: 100,
    width: 100,
  },
  icon: {
    //tintColor: '#fff',
    height: 100,
    width: 100,
  }
});