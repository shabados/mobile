import {DatabaseContext} from '../../App';
import {useContext} from 'react';

export default function useDatabase() {
  return useContext(DatabaseContext);
}
