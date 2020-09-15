import React, { ReactElement } from 'react'
import { StyleSheet, Image, View, Pressable, Button, Alert } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'
import { useNavigation } from '@react-navigation/native'

import logo from '../../../assets/images/logo.png'
import Screens from '../../lib/screens'

import Icons from './Icons'
import { IconProps } from './Icons.types'

const styles = StyleSheet.create( {
  navigationPanel: {
    height: '100%',
    backgroundColor: '#f9f9fa',
    opacity: 0.92,
  },
  navigationPanelButtonContainer: {
    paddingTop: '1%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navigationPanelHandle: {
    width: 80,
    height: 2,
    borderRadius: 5,
    backgroundColor: '#00000040',
  },
  navigationPanelHeader: {
    backgroundColor: '#f9f9fa',
    paddingTop: 7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    opacity: 0.92,
  },
  navigationPanelIconContainer: {
    flexDirection: 'row',
    paddingTop: '5%',
    paddingBottom: '10%',
  },
} )

const NAVIGATION_ICONS: [( props: IconProps ) => ReactElement, string][] = [
  [ Icons.HistoryIcon, Screens.History ],
  [ Icons.BookmarkIcon, Screens.Bookmarks ],
  [ Icons.SearchIcon, Screens.Search ],
  [ Icons.TabsIcon, Screens.Tabs ],
  [ Icons.DotsIcon, 'More' ],
]

const Drawer = () => {
  const navigation = useNavigation()

  const renderHeader = () => (
    <View style={styles.navigationPanelHeader}>
      <View style={styles.navigationPanelHandle} />

      <View style={styles.navigationPanelIconContainer}>
        {NAVIGATION_ICONS.map( ( [ IconComponent, destination ] ) => (
          <IconComponent
            key={destination}
            onPress={() => navigation.navigate( destination )}
          />
        ) )}
      </View>
    </View>
  )

  const renderContent = () => (
    <View style={styles.navigationPanel}>
      <View style={styles.navigationPanelButtonContainer}>
        <Button title="Prev" onPress={(): void => Alert.alert( '🚧' )} />
        <Pressable>
          <Image style={{ width: 60, height: 60 }} source={logo} />
        </Pressable>
        <Button title="Next" onPress={(): void => Alert.alert( '🚧' )} />
      </View>
    </View>
  )

  return (
    <BottomSheet
      snapPoints={[ 180, 90, 90 ]}
      renderContent={renderContent}
      renderHeader={renderHeader}
      initialSnap={1}
    />
  )
}

export default Drawer
