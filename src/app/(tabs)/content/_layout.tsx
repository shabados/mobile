import Icon from '@expo/vector-icons/Ionicons'
import { DeviceType, deviceType } from 'expo-device'
import { Stack, useRouter } from 'expo-router'
import { StyleSheet, View } from 'react-native'

import Logo from '~/components/atoms/logo'
import { Colors, units } from '~/themes'

const styles = StyleSheet.create( {
  icon: {
    fontSize: 28,
    color: Colors.PrimaryText,
  },
  left: {
    marginLeft: units.horizontalLayoutMargin,
  },
  right: {
    flexDirection: 'row',
    marginRight: units.horizontalLayoutMargin,
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
                    onPress={() => router.navigate( '/collections/' )}
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
