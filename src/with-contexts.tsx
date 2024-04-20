import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { ThemeProvider } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'jotai'
import { PostHogProvider, PostHogProviderProps } from 'posthog-react-native'
import { ElementType } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import configuration from '~/services/configuration'

import { reactNavigationTheme } from './themes'

export const queryClient = new QueryClient()

const getPostHogProviderProps = () => ( configuration.postHog.enabled
  ? { apiKey: configuration.postHog.apiKey }
  // https://github.com/PostHog/posthog-js-lite/issues/101
  // Messes with root navigation container in tests if autocapture.captureScreens is true
  : { apiKey: 'dummy', options: { disabled: true }, autocapture: { captureScreens: false } }
  ) satisfies Partial<PostHogProviderProps>

const withContexts = ( Component: ElementType ) => {
  const WithContexts = () => (
    <Provider>
      <SafeAreaProvider>
        <ThemeProvider value={reactNavigationTheme}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <QueryClientProvider client={queryClient}>
                <PostHogProvider autocapture {...getPostHogProviderProps()}>
                  <Component />
                </PostHogProvider>
              </QueryClientProvider>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  )

  return WithContexts
}

export default withContexts
