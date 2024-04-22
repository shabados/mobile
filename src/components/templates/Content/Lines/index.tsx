import { useLocalSearchParams, useRouter } from 'expo-router'
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
  const router = useRouter()

  // For now, props are the same. We should re-architect this area...
  const Comp = isReaderMode ? ReaderLines : GroupedLines

  return (
    <Comp
      lines={lines}
      Header={Header}
      initialLineId={lineId}
      onLineChange={( line ) => router.setParams( { lineId: line.id } )}
    />
  )
}

export default Lines
