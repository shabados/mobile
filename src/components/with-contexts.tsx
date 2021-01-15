import React, { ElementType } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const contexts: [ElementType, {[k: string]: any}?][] = [
  [ QueryClientProvider, { client: new QueryClient() } ],
]

// Generate a context wrapper function
const withContexts = contexts.reduce(
  ( withContexts, [ Provider, props ] ) => ( children: JSX.Element ) => withContexts(
    <Provider {...props}>{children}</Provider>,
  ),
  ( context: JSX.Element ) => context,
)

export default withContexts
