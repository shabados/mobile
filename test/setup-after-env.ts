import { queryClient } from '~/providers'

// Clear react-query caches
beforeEach( () => queryClient.clear() )
