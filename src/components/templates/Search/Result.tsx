import { toUnicode } from 'gurmukhi-utils'
import {
  Platform,
  Pressable,
  PressableProps,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'

import Typography from '~/components/atoms/Typography'
import { Colors, fonts, px, py, units } from '~/themes'

const styles = StyleSheet.create( {
  gurbani: {
    fontFamily: fonts.SantLipiRegular,
    fontSize: units.base * units.gurmukhiLatinRatio,
    lineHeight: units.base * units.gurmukhiLineHeightMultiplier,
    ...Platform.select( {
      android: { paddingBottom: 6 },
    } ),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerGurmukhi: {
    fontFamily: fonts.SantLipiRegular,
    fontSize: units.footnote * units.gurmukhiLatinRatio,
    lineHeight: units.footnote * units.gurmukhiLineHeightMultiplier,
  },
  root: {
    ...px( units.horizontalLayoutMargin ),
    ...py( ( units.base * units.lineHeightMultiplier ) / 2 ),
  },
  secondaryText: {
    color: Colors.SecondaryText,
  },
  translation: {
    fontSize: units.footnote,
    marginTop: -1,
  },
} )

export type ResultDataProps = {
  source: string,
  page: string,
  lastViewedAt?: string,
  gurmukhi: string,
  translation: string,
}

export type ResultProps = PressableProps & ResultDataProps & {
  style?: ViewStyle,
}

const Result = ( {
  style,
  source,
  page,
  lastViewedAt,
  gurmukhi,
  translation,
  ...props
}: ResultProps ) => (
  <Pressable style={[ styles.root, style ]} {...props}>
    <View style={styles.header}>
      <Typography style={[ styles.secondaryText, styles.headerGurmukhi ]}>
        {toUnicode( source )}
      </Typography>
      <Typography style={[ styles.secondaryText, styles.headerGurmukhi ]}>
        {toUnicode( page )}
      </Typography>
    </View>

    <Typography style={[ styles.gurbani ]}>{toUnicode( gurmukhi )}</Typography>

    <Typography style={[ styles.translation, styles.secondaryText ]}>
      {translation}
    </Typography>
  </Pressable>
)

export default Result
