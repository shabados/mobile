import { queryClient } from '../src/components/with-contexts'

// Clear react-query caches
beforeEach( () => queryClient.clear() )
