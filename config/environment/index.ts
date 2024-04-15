import { readdirSync } from 'node:fs'

import dedent from 'dedent'

import { EnvironmentConfig } from './types'

const { env: { ENV = 'local' } } = process

const getEnvironmentConfig = () => {
  if ( !ENV ) {
    console.error( dedent`
    ❌ Missing target environment.
    You must define the target environment by setting the ENV environment variable.
    ` )
    throw new Error( 'Target environment variable ENV is not defined' )
  }

  try {
    // eslint-disable-next-line
    return require(`./config.${ENV}`).default as EnvironmentConfig
  } catch {
    const validEnvironments = readdirSync( __dirname )
      .filter( ( file ) => file.startsWith( 'config.' ) )
      .map( ( file ) => file.replace( 'config.', '' ).replace( '.ts', '' ) )

    console.error( dedent`
    ❌ Missing environment file for ${ENV}.
    You must create a file named config.${ENV}.ts in the config/environment directory or set the ENV environment variable to one of the following values:
      ${validEnvironments.map( ( env ) => `• ${env}` ).join( '\n      ' )}
    
    ${ENV === 'local' ? '💡Tip: If you are running this project for the first time, you\'ll need to copy config.example.ts to config.local.ts. This file is not checked into git' : ''}
    ` )

    throw new Error( `${ENV} environment file not found` )
  }
}

export default getEnvironmentConfig
