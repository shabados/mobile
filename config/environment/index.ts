import { readdirSync } from 'node:fs'

import dedent from 'dedent'

import { EnvironmentConfig } from './types'

const { env: { APP_ENV = 'local' } } = process

const bullets = ( items: string[] ) => items.map( ( item ) => `• ${item}` ).join( '\n      ' )

const getEnvironmentConfig = () => {
  if ( !APP_ENV ) {
    console.error( dedent`
    ❌ Missing target environment.
    You must define the target environment by setting the APP_ENV environment variable.
    ` )
    throw new Error( 'Target environment variable APP_ENV is not defined' )
  }

  try {
    // eslint-disable-next-line
    return require(`./config.${APP_ENV}`).default as EnvironmentConfig
  } catch {
    const validEnvironments = readdirSync( __dirname )
      .filter( ( file ) => file.startsWith( 'config.' ) )
      .map( ( file ) => file.replace( 'config.', '' ).replace( '.ts', '' ) )

    console.error( dedent`
    ❌ Missing environment file for ${APP_ENV}.
    You must create a file named config.${APP_ENV}.ts in the config/environment directory or set the APP_ENV environment variable to one of the following values:
      ${bullets( validEnvironments )}
    
    ${APP_ENV === 'local' ? '💡 Tip: If you are running this project for the first time, you\'ll need to copy config.example.ts to config.local.ts. This file is not checked into git' : ''}
    ` )

    throw new Error( `${APP_ENV} environment file not found` )
  }
}

export default getEnvironmentConfig
