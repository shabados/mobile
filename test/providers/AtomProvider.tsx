import { Provider, WritableAtom } from 'jotai'
import { INTERNAL_InferAtomTuples } from 'jotai/react/utils/useHydrateAtoms'
import { useHydrateAtoms } from 'jotai/utils'
import { ReactNode } from 'react'

type HydrateAtomsProps<T> = {
  initialValues: INTERNAL_InferAtomTuples<T>,
  children?: ReactNode,
}

const HydrateAtoms = <T extends ( readonly [
  WritableAtom<unknown, never[], unknown>,
  unknown,
] )[],>( { initialValues, children }: HydrateAtomsProps<T> ) => {
  useHydrateAtoms( initialValues )

  return children
}

const AtomProvider = <T extends ( readonly [
  WritableAtom<unknown, never[], unknown>,
  unknown,
] )[],>( { initialValues, children }: HydrateAtomsProps<T> ) => (
  <Provider>
    <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
  </Provider>
)

export default AtomProvider
