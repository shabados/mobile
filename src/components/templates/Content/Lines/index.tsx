import { ComponentType } from 'react'

import { settings, useSetting } from '~/services/settings'
import { LineData } from '~/types/data'

import GroupedLines from '../GroupedLines'
import ReaderLines from '../ReaderLines'

type LinesProps = {
  lines: LineData[],
  Header?: ComponentType,
}

const Lines = ( { lines, Header }: LinesProps ) => {
  const [ isReaderMode ] = useSetting( settings.readerMode )

  return isReaderMode
    ? <ReaderLines lines={lines} Header={Header} />
    : <GroupedLines lines={lines} Header={Header} />
}

export default Lines
