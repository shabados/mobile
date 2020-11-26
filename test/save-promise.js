// Problem: https://github.com/callstack/react-native-testing-library/issues/379
// Solution: https://github.com/sbalay/without_await/commit/64a76486f31bdc41f5c240d28263285683755938
// Saves the original native Promise, React Native preset loads in the `promisejs` module instead
global.originalPromise = Promise
