import { render } from '@testing-library/react-native'

import Languages from '../../lib/languages'
import transliterators from '../../lib/transliterators'
import Line, { LineProps } from './Line'

const testProps: LineProps = {
  gurmukhi: 'Koj',
  translations: [],
  transliterations: [],
}

describe( '<Line />', () => {
  it( 'should render gurmukhi', () => {
    const { getByText } = render( <Line {...testProps} gurmukhi="ਹਰ" /> )

    expect( getByText( 'ਹਰ' ) ).toBeTruthy()
  } )

  it( 'should render only translations with translationSourceId=0 (English)', () => {
    const { queryByText } = render( <Line
      {...testProps}
      translations={[
        { translation: '1', translationSourceId: Languages.English },
        { translation: '2', translationSourceId: 2 },
      ]}
    /> )

    expect( queryByText( '1' ) ).toBeTruthy()
    expect( queryByText( '2' ) ).toBeFalsy()
  } )

  it( 'should render transliterations of the gurmukhi for the supplied languages', () => {
    const languages: LineProps['transliterations'] = [ Languages.English, Languages.Hindi ]
    const { getByText } = render( <Line
      {...testProps}
      gurmukhi="ਹਰ"
      transliterations={languages}
    /> )

    languages.forEach( ( language ) => {
      const transliteration = transliterators[ language ]( 'har' )

      expect( getByText( transliteration ) ).toBeTruthy()
    } )
  } )
} )
