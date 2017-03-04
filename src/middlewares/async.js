export default function({ dispatch }) {
  return next => action => {
    // if the action does not have a payload or does not have a .then property, we don't care about it, send it on
    if (!action.payload || !action.payload.then) {
      return next(action)
    }

    console.log('We don`t have a promise', action)
  }
}
