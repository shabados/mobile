import { fireEvent, render, screen } from '@testing-library/react-native'
import { useAtom } from 'jotai'
import { Text, View } from 'react-native'

import Button from '~/components/atoms/Button'
import i18n from '~/services/i18n'

import localeAtom from './locale'

const setup = () => {
  i18n.init()

  const Component = () => {
    const [ locale, setLocale ] = useAtom( localeAtom )

    return (
      <View>
        <Text>{locale}</Text>
        <Button onPress={() => void setLocale( 'de' )}>Change</Button>
      </View>
    )
  }

  return render( <Component /> )
}

describe( 'localeAtom', () => {
  it( 'should update i18n language when set', async () => {
    const changeLanguageSpy = jest.spyOn( i18n, 'changeLanguage' )
    setup()

    fireEvent.press( screen.getByText( 'Change' ) )

    expect( changeLanguageSpy ).toHaveBeenCalledWith( 'de' )
    expect( await screen.findByText( 'de' ) ).toBeTruthy()
  } )
} )
