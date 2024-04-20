import { useSuspenseQuery } from '@tanstack/react-query'
import { StyleSheet } from 'react-native'

import Container from '~/components/atoms/Container'
import GurmukhiLine from '~/components/molecules/GurmukhiLine'
import { baniQuery } from '~/services/data'
import { units } from '~/themes'

import Lines from '../Lines'

const styles = StyleSheet.create( {
  header: {
    textAlign: 'center',
    fontSize: units.title1,
    paddingTop: units.base * 2,
  },
} )

type BaniProps = {
  id: string,
}

const Bani = ( { id }: BaniProps ) => {
  const { data } = useSuspenseQuery( baniQuery( id ) )

  const header = <GurmukhiLine style={styles.header}>{data.nameGurmukhi}</GurmukhiLine>

  return (
    <Container>
      <Lines
        Header={() => header}
        lines={data.lines}
      />
    </Container>
  )
}

export default Bani
