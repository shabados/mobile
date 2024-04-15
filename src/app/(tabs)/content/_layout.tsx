import Icon from '@expo/vector-icons/Ionicons'
import { DeviceType, deviceType } from 'expo-device'
import { Stack, useRouter } from 'expo-router'
import { StyleSheet, View } from 'react-native'

import Logo from '~/components/atoms/Logo'
import { Colors, units } from '~/themes'

const styles = StyleSheet.create( {
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 28,
    color: Colors.PrimaryText,
    backgroundColor: 'white',
  },
  left: {
    marginLeft: units.horizontalLayoutMargin / 16,
  },
  right: {
    flexDirection: 'row',
    marginRight: units.horizontalLayoutMargin / 16,
  },
} )

const ContentLayout = () => {
  const router = useRouter()

  return (
    <Stack>
      <Stack.Screen
        name="(content)"
        options={{
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Icon
              title="menu"
              name="menu"
              testID="navbar-menu"
              disabled
              style={[ styles.icon, styles.left ]}
            />
          ),
          headerRight: () => (
            <View style={styles.right}>
              {deviceType === DeviceType.TABLET && (
                <>
                  <Icon
                    title="search"
                    name="search-outline"
                    testID="navbar-settings"
                    onPress={() => router.navigate( '/search' )}
                    style={styles.icon}
                  />

                  <Icon
                    title="collections"
                    name="bookmark-outline"
                    testID="navbar-settings"
                    onPress={() => router.navigate( '/collections' )}
                    style={styles.icon}
                  />
                </>
              )}

              <Icon
                title="settings"
                name="options-outline"
                testID="navbar-settings"
                onPress={() => router.navigate( '/settings' )}
                style={styles.icon}
              />
            </View>
          ),
          headerTitle: Logo,
        }}
      />
    </Stack>
  )
}

export default ContentLayout
