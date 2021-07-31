import { BaniListData } from '../types/data'

import * as gurbaniNow from './gurbaninow'

export const getBaniList = async (): Promise<BaniListData> => {
  const {
    list: { id, akhar, english },
  } = await gurbaniNow.getBaniList()

  return {
    id,
    akhar,
    english,
  }
}
