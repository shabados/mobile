import { appSchema, tableSchema } from '@nozbe/watermelondb'

const schema = appSchema( {
  version: 1,
  tables: [
    tableSchema( {
      name: 'searchResults',
      columns: [
        { name: 'searchTerm', type: 'string', isIndexed: true },
        { name: 'section', type: 'string' },
        { name: 'ang', type: 'number' },
        { name: 'gurbani', type: 'string' },
        { name: 'translation', type: 'string' },
      ],
    } ),
  ],
} )

export default schema
