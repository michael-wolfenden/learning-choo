import assert from 'power-assert'

import choo from './choo'

describe('choo', () => {
    it('should be a function', () => {
        assert(typeof choo === 'function')
    })

    describe('should return an object', () => {
        const app = choo()

        it('containing a toString function', () => {
            assert(typeof app.toString === 'function')
        })

        it('containing a router function', () => {
            assert(typeof app.router === 'function')
        })

        it('containing a model function', () => {
            assert(typeof app.model === 'function')
        })

        it('containing a start function', () => {
            assert(typeof app.start === 'function')
        })
    })
})

