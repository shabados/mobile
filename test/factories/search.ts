import { Factory } from 'fishery'

import { SearchData } from '../../src/types/data'

import { shabad } from './shabad'
import { line } from './line'

export const search = Factory.define<SearchData>( () => ( {
  line: line.build(),
  shabad: shabad.build(),
} ) )
