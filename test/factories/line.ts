import { datatype, random } from 'faker'
import { Factory } from 'fishery'

import { LineData } from '../../src/types/data'

export const line = Factory.define<LineData>( ( { sequence } ) => ( {
  id: datatype.uuid(),
  gurmukhi: random.words( 14 ),
  translations: [ { translation: random.words( 10 ), translationSourceId: datatype.number() } ],
  sourcePage: Math.floor( sequence / 10 ) + 1,
  sourceLine: sequence % 10,
} ) )
