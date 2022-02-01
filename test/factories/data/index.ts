import { faker } from '@faker-js/faker'

import shabad from './sggs-first-shabad.json'

export const gurmukhiLines = shabad.map( ( { gurmukhi } ) => gurmukhi )

export const randomGurmukhi = () => faker.helpers.randomize( gurmukhiLines )
