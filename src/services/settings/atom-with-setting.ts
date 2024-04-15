import { atom } from 'jotai'

import { atomWithKvStorage } from '~/services/kv-storage'

export type SettingSchema<Data> = {
  version: number,
  updatedAt: string | null,
  value: Data,
}

type SettingMetadata = {
  version: 1,
}

const atomWithSetting = <Data extends string | object | number | boolean>(
  key: string,
  initialValue: Data,
  { version = 1 }: Partial<SettingMetadata> = {}
) => {
  const baseAtom = atomWithKvStorage<SettingSchema<Data>>( `setting.${key}`, {
    version,
    updatedAt: null,
    value: initialValue,
  } )

  return atom(
    ( get ) => get( baseAtom )?.value,
    ( _, set, value: Data ) => set( baseAtom, { version, updatedAt: new Date().toJSON(), value } )
  )
}

export default atomWithSetting
