import { Factory } from 'fishery'
import { random } from 'faker'

import { LineData } from '../../src/types/data'

export const line = Factory.define<LineData>( ( { sequence } ) => ( {
  id: random.uuid(),
  gurmukhi: random.words( 14 ),
  translations: [ { translation: random.words( 10 ), translationSourceId: random.number() } ],
  sourcePage: Math.floor( sequence / 10 ) + 1,
  sourceLine: sequence % 10,
} ) )
