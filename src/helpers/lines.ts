import { LineData } from '../types/data'

// !Hopefully, the API will return more metadata that will mean we don't need to parse like this
const sectionEndRegex = /(]\d*]$|] rhwau ])/
const isSectionEnd = ( gurmukhi: string ) => sectionEndRegex.test( gurmukhi )

export const getLineSections = ( lines: LineData[] ) => lines.reduce( ( groupedLines, line ) => {
  groupedLines[ groupedLines.length - 1 ].push( line )

  if ( isSectionEnd( line.gurmukhi ) ) groupedLines.push( [] )

  return groupedLines
}, [ [] ] as LineData[][] )
