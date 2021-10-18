/* eslint-disable @typescript-eslint/no-unsafe-call */
const { DetoxCircusEnvironment, SpecReporter, WorkerAssignReporter } = require( 'detox/runners/jest-circus' )

class CustomDetoxEnvironment extends DetoxCircusEnvironment {
  constructor( config, context ) {
    super( config, context )

    this.initTimeout = 300000

    // This takes care of generating status logs on a per-spec basis.
    this.registerListeners( {
      SpecReporter,
      WorkerAssignReporter,
    } )
  }
}

module.exports = CustomDetoxEnvironment
