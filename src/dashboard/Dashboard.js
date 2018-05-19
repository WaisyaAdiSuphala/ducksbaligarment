import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Dashboard from './pages/Dash';
import Daftar from './pages/Daftar';
import Pesanan from './pages/Pesanan';
import Lokasi from './pages/Lokasi';
import Keluar from './pages/Keluar';
import Pesan from './pages/Pesan';

const RootStack = DrawerNavigator(
{   
    Dashboard: {
      screen: Dashboard,
    },
    Daftar: {
      screen: Daftar,
    },
    Pesan: {
      screen: Pesan,
    },
    Pesanan: {
      screen: Pesanan,
    },
    Lokasi: {
      screen: Lokasi,
    },
    Keluar: {
      screen: Keluar,
    },
},
  {
    initialRouteName: 'Dashboard',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
