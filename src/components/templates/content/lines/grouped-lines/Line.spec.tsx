import { render, screen } from '@testing-library/react-native'

import { languages } from '~/helpers/languages'
import transliterators from '~/helpers/transliterators'

import Line, { LineProps } from './Line'

const testProps: LineProps = {
  gurmukhi: 'Koj',
  translations: [],
  transliterations: [],
}

describe( '<Line />', () => {
  it( 'should render gurmukhi', () => {
    render( <Line {...testProps} gurmukhi="ਹਰ" /> )

    expect( screen.getByText( 'ਹਰ' ) ).toBeTruthy()
  } )

  it( 'should render only translations with translationSourceId=0 (English)', () => {
    render( <Line
      {...testProps}
      translations={[
        { translation: '1', translationSourceId: languages.english },
        { translation: '2', translationSourceId: 2 },
      ]}
    /> )

    expect( screen.queryByText( '1' ) ).toBeTruthy()
    expect( screen.queryByText( '2' ) ).toBeFalsy()
  } )

  it( 'should render transliterations of the gurmukhi for the supplied languages', () => {
    const languages: LineProps['transliterations'] = [ 'english', 'hindi' ]
    render( <Line
      {...testProps}
      gurmukhi="ਹਰ"
      transliterations={languages}
    /> )

    languages.forEach( ( language ) => {
      const transliteration = transliterators[ language ]( 'har' )

      expect( screen.getByText( transliteration ) ).toBeTruthy()
    } )
  } )
} )
