import { useContext } from 'react'
import { DatabaseContext } from '../App'

export default function useDatabase() {
  return useContext( DatabaseContext )
}
