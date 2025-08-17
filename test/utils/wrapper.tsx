import { NavigationContainer } from '@react-navigation/native'
import { Fragment, ReactNode } from 'react'

import Providers from '~/providers'

export type WrapperProps = { children: ReactNode }

type WrapperOptions = {
  navigationContainer: boolean,
}

export const wrapperOptions = ( { navigationContainer = false }: Partial<WrapperOptions> = {} ) => {
  const wrapper = ( { children }: WrapperProps ) => {
    const Container = navigationContainer ? NavigationContainer : Fragment

    return (
      <Container>
        <Providers>
          {children}
        </Providers>
      </Container>
    )
  }

  return { wrapper }
}
