import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Provider } from 'jotai'
import { ElementType } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from 'react-query'

export const queryClient = new QueryClient( {
  defaultOptions: {
    queries: { suspense: true },
  },
} )

const contexts: [ElementType, { [k: string]: any }?][] = [
  [ Provider ],
  [ QueryClientProvider, { client: queryClient } ],
  [ SafeAreaProvider ],
  [ BottomSheetModalProvider ],
]

// Generate a context wrapper function
const withContexts = contexts.reduce(
  ( withContexts, [ Provider, props ] ) => ( children: JSX.Element ) => withContexts(
    <Provider {...props}>{children}</Provider>,
  ),
  ( context: JSX.Element ) => context,
)

export default withContexts
