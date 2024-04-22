import { Redirect } from 'expo-router'

import { getLastContentPath } from '~/services/history/last-content-path'

const lastContentPath = getLastContentPath()

const Index = () => ( lastContentPath
  ? <Redirect href={lastContentPath} />
  : <Redirect href="/content/shabad/DMP" /> )

export default Index
