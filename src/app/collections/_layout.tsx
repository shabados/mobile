import { Stack, useNavigation } from 'expo-router'

import Typography from '~/components/atoms/Typography'
import { commonStrings, useTranslation } from '~/services/i18n'

const CollectionsLayout = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()

  return (
    <Stack>
      <Stack.Screen
        name="[...path]"
        options={{
          headerRight: () => (
            <Typography onPress={() => navigation.goBack()}>
              {t( commonStrings.done )}
            </Typography>
          ),
        }}
      />
    </Stack>
  )
}

export default CollectionsLayout
