import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from '../models/Schema'
import { dbModels } from '../models'

const adapter = new SQLiteAdapter( {
  dbName: 'ShabadOS',
  schema,
} )

const database = new Database( {
  adapter,
  modelClasses: dbModels,
  actionsEnabled: true,
} )

export default database
