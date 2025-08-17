import { Href, Redirect } from 'expo-router'

import { getLastContentPath } from '~/services/history/last-content-path'

const lastContentPath = getLastContentPath()

const Index = () => ( lastContentPath
  ? <Redirect href={lastContentPath as Href} />
  : <Redirect href="/content/shabad/DMP" /> )

export default Index
