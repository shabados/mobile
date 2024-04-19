import { NavigationContainer } from '@react-navigation/native'
import { Fragment, ReactNode } from 'react'

import withContexts from '~/with-contexts'

export type WrapperProps = { children: ReactNode }

type WrapperOptions = {
  navigationContainer: boolean,
}

export const wrapperOptions = ( { navigationContainer = false }: Partial<WrapperOptions> = {} ) => {
  const wrapper = ( { children }: WrapperProps ) => {
    const Contexts = withContexts( () => children )
    const Container = navigationContainer ? NavigationContainer : Fragment

    return (
      <Container>
        <Contexts />
      </Container>
    )
  }

  return { wrapper }
}
