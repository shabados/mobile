const getArrayElement = <T>( array: T[], index: number ) => array[ index % array.length ]

export default getArrayElement
