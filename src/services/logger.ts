import { consoleTransport, logger } from 'react-native-logs'

import { hash } from '~/helpers/string'

import configuration from './configuration'

const availableColors = [
  'redBright',
  'greenBright',
  'yellowBright',
  'blueBright',
  'magentaBright',
  'cyanBright',
  'whiteBright',
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'grey',
] as const

const extensionColors: Record<string, ( typeof availableColors )[number]> = {}

const log = logger.createLogger( {
  enabled: configuration.logger.enabled,
  ...( configuration.logger.enabled && {
    severity: configuration.logger.level,
  } ),
  transport: [ consoleTransport ],
  stringifyFunc: ( data: string | object ) => ( typeof data === 'object'
    ? `\n${JSON.stringify( data, null, 2 )}`
    : data ),
  transportOptions: {
    colors: {
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
    extensionColors,
  },
} )

export const createLogger = ( namespace: string ) => {
  extensionColors[ namespace ] = availableColors[ hash( namespace, availableColors.length ) ]

  return log.extend( namespace )
}

export default log
