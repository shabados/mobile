import { Factory } from 'fishery'

import { SearchData } from '~/types/data'

import { line } from './line'
import { shabad } from './shabad'

export const search = Factory.define<SearchData>( () => ( {
  line: line.build(),
  shabad: shabad.build(),
} ) )
