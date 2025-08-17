export enum Orientation {
  UNKNOWN = 0,
  PORTRAIT_UP = 1,
  PORTRAIT_DOWN = 2,
  LANDSCAPE_LEFT = 3,
  LANDSCAPE_RIGHT = 4,
}

export type OrientationInfo = {
  orientation: Orientation,
}

export type OrientationChangeEvent = {
  orientationInfo: OrientationInfo,
}

export const getOrientationAsync = jest.fn().mockResolvedValue( Orientation.PORTRAIT_UP )

export const addOrientationChangeListener = jest.fn().mockReturnValue( {
  remove: jest.fn(),
} )

export const removeOrientationChangeListener = jest.fn()

// Additional commonly used functions
export const lockAsync = jest.fn().mockResolvedValue( undefined )
export const unlockAsync = jest.fn().mockResolvedValue( undefined )
export const lockPlatformAsync = jest.fn().mockResolvedValue( undefined )
export const getPlatformOrientationLockAsync = jest.fn().mockResolvedValue( undefined )
export const supportsOrientationLockAsync = jest.fn().mockResolvedValue( true )
export const getOrientationLockAsync = jest.fn().mockResolvedValue( undefined )
