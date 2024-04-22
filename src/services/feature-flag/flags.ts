const toggle = ( defaultValue: boolean ) => defaultValue
const variant = <Variant extends string>( defaultValue: Variant ) => defaultValue

const flags = {
  boolean_test_1: toggle( true ),
  variant_test_1: variant<'green' | 'red'>( 'red' ),
}

export default flags
