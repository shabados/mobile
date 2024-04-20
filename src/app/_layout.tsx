import { Stack } from 'expo-router'
import { ComponentProps } from 'react'

import Container from '~/components/atoms/Container'
import Empty from '~/components/atoms/Empty'
import { Colors } from '~/themes'
import withContexts from '~/with-contexts'

const tabScreenOptions = {
  headerShown: true,
  // Required to stop the occasional glitch where the header seems to shoot above the safe area
  // Not really sure why, but rendering a Container with a top safe area seems to fix it
  // Note: this adds a negligible amount of extra space above the header
  header: () => <Container safeArea top style={{ backgroundColor: Colors.MainView }} />,
  animation: 'fade',
} satisfies ComponentProps<typeof Stack>['screenOptions']

const RootLayout = () => (
  <Stack screenOptions={{ presentation: 'modal', headerShown: false }}>
    <Stack.Screen name="(tabs)" options={tabScreenOptions} />
    <Stack.Screen name="collections" />

    <Stack.Screen name="search" options={{ headerShown: true, header: Empty }} />
  </Stack>
)

export default withContexts( RootLayout )
