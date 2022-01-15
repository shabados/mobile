// Waits for next process tick to happen
// Allows callbacks etc to fire
const nextTick = () => new Promise( ( resolve ) => { process.nextTick( resolve ) } )

export default nextTick
