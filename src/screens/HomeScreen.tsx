import { Container, Content, Text, View } from 'native-base'
import React, { FC } from 'react'
import { Image, StyleSheet } from 'react-native'

import logo from '../../assets/images/logo.png'
import NavigationDrawer from '../components/NavigationDrawer'

type HomeScreenProps = {}

const styles = StyleSheet.create( {
  welcomeContent: {
    alignItems: 'center',
  },
  welcomeLogo: {
    width: '30%',
    height: 100,
    marginTop: '5%',
    marginBottom: '5%',
  },
} )

const HomeScreen: FC<HomeScreenProps> = () => (
  <Container>
    <Content>
      <View style={styles.welcomeContent}>
        <Image
          style={styles.welcomeLogo}
          source={logo}
        />
        <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Shabad OS</Text>
      </View>
    </Content>
    <NavigationDrawer />
  </Container>
)

export default HomeScreen
