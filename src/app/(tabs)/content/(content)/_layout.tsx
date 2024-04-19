import { DeviceType, deviceType } from 'expo-device'
import { Slot } from 'expo-router'

import Container from '~/components/atoms/Container'
import BottomBar from '~/components/templates/Content/BottomBar'

export default () => (
  <Container>
    <Slot />
    {deviceType !== DeviceType.TABLET && <BottomBar />}
  </Container>
)
