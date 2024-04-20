export const hash = ( str: string, length = Infinity ) => Math.abs(
  str
    .split( '' )
    .reduce(
      // eslint-disable-next-line no-bitwise
      ( acc, char ) => char.charCodeAt( 0 ) + ( acc << 5 ) + ( acc << 16 ) - acc,
      0
    )
) % length
