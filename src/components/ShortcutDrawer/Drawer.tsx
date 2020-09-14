import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Button, Text, View } from 'native-base'
import BottomSheet from 'reanimated-bottom-sheet'
import { useNavigation } from '@react-navigation/native'

import logo from '../../../assets/images/logo.png'
import { SEARCH_SCREEN, TABS_SCREEN, BOOKMARKS_SCREEN, HISTORY_SCREEN } from '../../lib/screens'
import Icons from './Icons'

type NavigationBarProps = { }

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

const NavigationBar: React.FC<NavigationBarProps> = () => {
  const navigation = useNavigation()
  const renderNavigationHeader = () => (
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

  const renderNavigationContent = () => (
    <View style={styles.navigationPanel}>
      <View style={styles.navigationPanelButtonContainer}>
        <Button>
          <Text>Prev</Text>
        </Button>
        <Button transparent>
          <Image style={{ width: 60, height: 60 }} source={logo} />
        </Button>
        <Button>
          <Text>Next</Text>
        </Button>
      </View>
    </View>
  )

  return (
    <BottomSheet
      snapPoints={[ 180, 90, 90 ]}
      renderContent={renderNavigationContent}
      renderHeader={renderNavigationHeader}
      initialSnap={1}
    />
  )
}

export default NavigationBar
