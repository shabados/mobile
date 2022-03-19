import dotenv from 'dotenv'
import { readFileSync } from 'fs'

const main = () => {
  const { ENVFILE } = process.env

  const envFile = readFileSync( ENVFILE! )

  return dotenv.parse( envFile )
}

export default main()
