export const mutableValue = <T>( initialValue: T ) => {
  let value = initialValue

  const set = ( newValue: T ) => { value = newValue }
  const get = () => value

  return { set, get }
}

export const mutableCounter = ( initialValue = 0 ) => {
  const { get, set } = mutableValue( initialValue )

  const increment = ( step = 1 ) => {
    set( get() + step )
    return get()
  }

  const decrement = ( step = 1 ) => increment( -step )

  return { get, set, increment, decrement }
}
