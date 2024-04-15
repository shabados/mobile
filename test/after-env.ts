import { queryClient } from '~/with-contexts'

// Clear react-query caches
beforeEach( () => queryClient.clear() )
