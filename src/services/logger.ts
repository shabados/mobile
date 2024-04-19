import { defLvlType, logger } from 'react-native-logs'

const log = logger.createLogger<defLvlType>()

export const createLogger = log.extend

export default log
