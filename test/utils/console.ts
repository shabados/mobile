const originalConsole = { ...console }

type Methods = Pick<typeof originalConsole, 'log' | 'info' | 'warn' | 'error' | 'debug'>

export const muteConsole = ( name: keyof Methods ) => {
  console[ name ] = () => {}
}

export const unmuteConsole = ( name: keyof Methods ) => {
  console[ name ] = originalConsole[ name ]
}
