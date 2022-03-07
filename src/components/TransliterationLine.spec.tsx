import { render } from '@testing-library/react-native'

import Languages from '../helpers/languages'
import transliterators from '../helpers/transliterators'
import TransliterationLine from './TransliterationLine'

describe( '<TransliterationLine />', () => {
  it( 'should render gurmukhi transliteration for a given language', () => {
    const gurmukhi = 'rhwau'

    const { queryByText } = render(
      <TransliterationLine language={Languages.English}>
        {gurmukhi}
      </TransliterationLine>
    )

    expect( queryByText( transliterators[ Languages.English ]( gurmukhi ) ) ).toBeTruthy()
  } )
} )
