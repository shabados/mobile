import { defLvlType, logger } from 'react-native-logs'

import configuration from './configuration'

const log = logger.createLogger<defLvlType>( {
  enabled: configuration.logger.enabled,
  ...( configuration.logger.enabled && {
    severity: configuration.logger.level,
  } ),
} )

export const createLogger = log.extend

export default log
