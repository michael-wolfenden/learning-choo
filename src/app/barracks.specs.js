import assert from 'power-assert'

import barracks from './barracks'

describe('barracks', () => {
    it('should be a function', () => {
        assert(typeof barracks === 'function')
    })

    describe('should return an object', () => {
        const store = barracks()

        it('containing a model function', () => {
            assert(typeof store.model === 'function')
        })

        it('containing a state function', () => {
            assert(typeof store.state === 'function')
        })
    })
})

