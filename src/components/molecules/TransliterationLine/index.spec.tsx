import { render, screen } from '@testing-library/react-native'

import transliterators from '~/helpers/transliterators'

import TransliterationLine from '.'

describe( '<TransliterationLine />', () => {
  it( 'should render gurmukhi transliteration for a given language', () => {
    const gurmukhi = 'rhwau'

    render(
      <TransliterationLine language="english">
        {gurmukhi}
      </TransliterationLine>
    )

    expect( screen.queryByText( transliterators.english( gurmukhi ) ) ).toBeTruthy()
  } )
} )
