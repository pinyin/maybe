import {existing} from './existing'

describe(`${existing.name}`, () => {
    test(`${existing.name} should be a function`, () => {
        expect(existing).toBeInstanceOf(Function)
    })
    test(`${existing.name} should return a boolean value representing whether the param is defined`, () => {
        expect(existing(null)).toEqual(false)
        expect(existing(undefined)).toEqual(false)
        expect(existing(Number.NaN)).toEqual(false)
        expect(existing(1)).toEqual(true)
        expect(existing(2)).toEqual(true)
    })
})
