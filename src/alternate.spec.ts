import {alternate} from './alternate'

describe(`${alternate.name}`, () => {
    test(`${alternate.name} should be a function`, () => {
        expect(alternate).toBeInstanceOf(Function)
    })
    test(`${alternate.name} should return second param iff first param is not defined`, () => {
        expect(alternate(1, 2)).toBe(1)
        expect(alternate(null, 2)).toBe(2)
        expect(alternate(null, null)).toBeNull()
    })
})

