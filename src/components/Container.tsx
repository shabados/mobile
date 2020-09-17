import React, { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import {
  SafeAreaView,
  NativeSafeAreaViewProps,
} from 'react-native-safe-area-context'

const styles = StyleSheet.create( {
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
} )

type ContainerProps = {
  children: ReactNode,
} & NativeSafeAreaViewProps

const Container = ( { children, ...props }: ContainerProps ) => (
  <SafeAreaView
    style={styles.main}
    mode="margin"
    /**
     * Wasn't able to find a good solution to fix `ShortcutDrawer` on differnt screen devices
     * Notably the iPhone 11 (ones with no home button)
     * Override this where needed to include safe area view for bottom.
     */
    edges={[ 'left', 'top', 'right' ]}
    {...props}
  >
    {children}
  </SafeAreaView>
)

export default Container
