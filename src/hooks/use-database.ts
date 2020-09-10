import { useContext } from 'react'
import { Database } from '@nozbe/watermelondb'
import { DatabaseContext } from '../lib/context'

export default (): Database => useContext( DatabaseContext )
