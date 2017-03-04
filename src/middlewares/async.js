export default function({ dispatch }) {
  return next => action => {
    // if the action does not have a payload or does not have a .then property, we don't care about it, send it on
    if (!action.payload || !action.payload.then) {
      return next(action)
    }

    // make sure the action's promise resolves
    action.payload
      .then(function(response) {
        const newAction = { ...action, payload: response} // take existing action and copy over payload to create new action
        dispatch(newAction)
      })
  }
}
