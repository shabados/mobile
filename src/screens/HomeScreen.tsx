import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import logo from '../../assets/images/logo.png'
import ShortcutDrawer from '../components/ShortcutDrawer'
import Container from '../components/Container'

const styles = StyleSheet.create( {
  welcomeContent: {
    marginTop: '5%',
    alignItems: 'center',
  },
  welcomeLogo: {
    width: '30%',
    height: 100,
    marginTop: '5%',
    marginBottom: '5%',
  },
  brand: {
    fontSize: 35,
    fontWeight: 'bold',
  },
} )

const HomeScreen = () => (
  <Container>
    <View style={styles.welcomeContent}>
      <Image style={styles.welcomeLogo} source={logo} />
      <Text style={styles.brand}>Shabad OS</Text>
    </View>
    <ShortcutDrawer />
  </Container>
)

export default HomeScreen
