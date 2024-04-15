import { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

import ItemSeparator from '~/components/atoms/ItemSeparator'
import Typography from '~/components/atoms/Typography'
import { Colors, units } from '~/themes'

const BULLET_SIZE = 27

const styles = StyleSheet.create( {
  active: {
    backgroundColor: Colors.Active,
  },
  item: {
    flexDirection: 'row',
    height: units.minimumTouchDimension * units.thumbFingerRatio,
    alignItems: 'center',
  },
  radio: {
    marginLeft: 'auto',
    width: BULLET_SIZE,
    height: BULLET_SIZE,
    borderRadius: BULLET_SIZE,
    backgroundColor: Colors.Disabled,
  },
  title: {
    lineHeight: units.minimumTouchDimension,
  },
} )

export type RadioGroupProps<Value> = {
  initialValue: Value,
  options: [string, Value][],
  onChange?: ( value: Value, name: string ) => void,
}

const RadioGroup = <Value,>( {
  initialValue,
  options,
  onChange = () => {},
}: RadioGroupProps<Value> ) => {
  const [ currentValue, setValue ] = useState( initialValue )

  const handlePress = ( name: string, value: Value ) => () => {
    setValue( value )
    onChange( value, name )
  }

  return (
    <>
      {options.map( ( [ name, value ] ) => (
        <View key={name}>
          <Pressable key={name} style={styles.item} onPress={handlePress( name, value )}>
            <Typography style={styles.title}>{name}</Typography>

            <View style={[ styles.radio, currentValue === value && styles.active ]} testID="radio-bullet" />
          </Pressable>

          <ItemSeparator full />
        </View>
      ) )}
    </>
  )
}

export default RadioGroup
