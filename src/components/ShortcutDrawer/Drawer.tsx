import React, { FC, ReactNode } from 'react'
import { StyleSheet, Image, View, Pressable, Button, Alert } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'
import { useNavigation } from '@react-navigation/native'

import logo from '../../../assets/images/logo.png'
import { SEARCH_SCREEN, TABS_SCREEN, BOOKMARKS_SCREEN, HISTORY_SCREEN } from '../../lib/screens'
import Icons from './Icons'

const styles = StyleSheet.create( {
  navigationPanel: {
    height: '100%',
    backgroundColor: '#f9f9fa',
    opacity: 0.92,
  },
  navigationPanelHeader: {
    backgroundColor: '#f9f9fa',
    paddingTop: 7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    opacity: 0.92,
  },
  navigationPanelHandle: {
    width: 80,
    height: 2,
    borderRadius: 5,
    backgroundColor: '#00000040',
  },
  navigationPanelIconContainer: {
    flexDirection: 'row',
    paddingTop: '5%',
    paddingBottom: '10%',
  },
  navigationPanelButtonContainer: {
    paddingTop: '1%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
} )

const NAVIGATION_ICONS = [
  [ Icons.HistoryIcon, HISTORY_SCREEN ],
  [ Icons.BookmarkIcon, BOOKMARKS_SCREEN ],
  [ Icons.SearchIcon, SEARCH_SCREEN ],
  [ Icons.TabsIcon, TABS_SCREEN ],
  [ Icons.DotsIcon, 'More' ],
]

const Drawer: FC = () => {
  const navigation = useNavigation()

  const renderHeader = (): ReactNode => (
    <View style={styles.navigationPanelHeader}>
      <View style={styles.navigationPanelHandle} />

      <View style={styles.navigationPanelIconContainer}>
        {NAVIGATION_ICONS.map( ( [ IconComponent, destination ] ) => (
          <IconComponent
            key={destination}
            onPress={(): void => navigation.navigate( destination )}
          />
        ) )}
      </View>

    </View>
  )

  const renderContent = (): ReactNode => (
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
