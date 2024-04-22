import { useLocalSearchParams } from 'expo-router'
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
  const { lineId } = useLocalSearchParams<{ lineId?: string }>()
  const [ isReaderMode ] = useSetting( settings.readerMode )

  return isReaderMode
    ? <ReaderLines lines={lines} Header={Header} initialLineId={lineId} />
    : <GroupedLines lines={lines} Header={Header} initialLineId={lineId} />
}

export default Lines
