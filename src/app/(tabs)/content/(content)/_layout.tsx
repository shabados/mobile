import { DeviceType, deviceType } from 'expo-device'
import { Slot } from 'expo-router'

import Container from '~/components/atoms/container'
import BottomBar from '~/components/templates/content/bottom-bar'

export default () => (
  <Container>
    <Slot />
    {deviceType !== DeviceType.TABLET && <BottomBar />}
  </Container>
)
