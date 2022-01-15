const mutableValue = <T>( initialValue: T ) => {
  let value = initialValue

  const set = ( newValue: T ) => {
    value = newValue
  }

  const get = () => value

  return { set, get }
}

export default mutableValue
