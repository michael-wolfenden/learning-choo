const wrapOnError = (onError) => (err) => {
    if (err) onError(err)
}

const defaultOnError = (err) => {
    throw err
}

const barracks = (handlers = {}) => {
    /*eslint-disable */
    const onError = wrapOnError(handlers.onError || defaultOnError)
    const onAction = handlers.onAction
    const onStateChange = handlers.onStateChange

    let state$ = {}
    /*eslint-enable */
    const models$ = []

    const setModel = (model) => models$.push(model)

    const getState = (options = {}) => {
        if (options.freeze === false) {
            return { ...state$ }
        }

        return Object.freeze({ ...state$ })
    }

    return {
        model: setModel,
        state: getState,
    }
}


module.exports = barracks

