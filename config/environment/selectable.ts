type OS = 'android' | 'ios'

export type Selectable<T> = ( { [device in OS]: T } ) & { type: 'selectable' }

type SelectableParams<T> = Omit<Selectable<T>, 'type'>

export const selectable = <T>( options: SelectableParams<T> ): Selectable<T> => ( {
  ...options,
  type: 'selectable',
} as const )
