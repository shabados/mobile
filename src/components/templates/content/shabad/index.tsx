import { useSuspenseQuery } from '@tanstack/react-query'

import Container from '~/components/atoms/container'
import { shabadQuery } from '~/services/data'

import Lines from '../lines'

type ShabadProps = {
  id: string,
}

const Shabad = ( { id }: ShabadProps ) => {
  const { data } = useSuspenseQuery( shabadQuery( id ) )

  return (
    <Container>
      <Lines lines={data.lines} />
    </Container>
  )
}

export default Shabad
