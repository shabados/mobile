import { atom } from 'jotai'

import i18n, { Languages } from '../i18n'
import atomWithSetting from './atom-with-setting'

const settingAtom = atomWithSetting( 'locale', i18n.language as Languages )

const localeAtom = atom(
  ( get ) => get( settingAtom ),
  async ( _, set, value: Languages ) => {
    await i18n.changeLanguage( value )
    set( settingAtom, value )
  }
)

export default localeAtom
