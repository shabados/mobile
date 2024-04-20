import { defLvlType, logger } from 'react-native-logs'

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
]

const extensionColors = {} as Record<string, string>

const log = logger.createLogger<defLvlType>( {
  enabled: configuration.logger.enabled,
  ...( configuration.logger.enabled && {
    severity: configuration.logger.level,
  } ),
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
