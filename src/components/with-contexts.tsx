import React, { ElementType } from 'react'
import { SWRConfig } from 'swr'

const contexts: [ElementType, {[k: string]: any}?][] = [
  [ SWRConfig ],
]

// Generate a context wrapper function
const withContexts = contexts.reduce(
  ( withContexts, [ Provider, props ] ) => ( children: JSX.Element ) => withContexts(
    <Provider {...props}>{children}</Provider>,
  ),
  ( context: JSX.Element ) => context,
)

export default withContexts
