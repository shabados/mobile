import { Observable } from 'rxjs'
import { useEffect, useState } from 'react'

export default (
  observable: Observable<any>,
  initial?: any,
  deps: any[] = [],
) => {
  const [ state, setState ] = useState( initial )

  useEffect( () => {
    const subscription = observable.subscribe( setState )

    return () => subscription.unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps )

  return state
}
