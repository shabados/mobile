import { Stack } from 'expo-router'

import Empty from '~/components/atoms/Empty'
import withContexts from '~/with-contexts'

const RootLayout = () => (
  <Stack screenOptions={{ presentation: 'modal', headerShown: false }}>
    <Stack.Screen name="(tabs)" />
    <Stack.Screen name="collections" />

    <Stack.Screen name="search" options={{ headerShown: true, header: Empty }} />
  </Stack>
)

export default withContexts( RootLayout )
