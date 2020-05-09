import React from 'react'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'

import api from './services/api'

import YoutubeLogo from './assets/youtube.png'
import NetflixLogo from './assets/netflix.png'
import PrimeLogo from './assets/prime.png'

export default function App() {
  async function launchApp(id) {
    await api.get(`/app/${id}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.btnView}>
        <TouchableOpacity onPress={() => launchApp(0)} style={styles.btnApp}>
          <Image style={styles.imageLogo} source={YoutubeLogo}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => launchApp(1)} style={styles.btnApp}>
          <Image style={styles.imageLogo} source={NetflixLogo}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => launchApp(2)} style={styles.btnApp}>
          <Image style={styles.imageLogo} source={PrimeLogo}/>
        </TouchableOpacity>
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity onPress={() => {}} style={styles.btnMedia}>
          <Feather name="rewind" size={25} color="#fff"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.btnMedia}>
          <Feather name="play" size={25} color="#fff"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.btnMedia}>
          <Feather name="pause" size={25} color="#fff"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.btnMedia}>
          <Feather name="fast-forward" size={25} color="#fff"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnView: {
    width: 380,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  btnApp: {
    width: 100,
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5
  },

  btnMedia: {
    width: 80,
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5
  },

  imageLogo: {
    width: 80,
    height: 30,
    resizeMode: 'stretch',
  }
});
