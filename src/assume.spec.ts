import {assume} from './assume'

describe(`${assume.name}`, () => {
    test(`${assume.name} should be a function`, () => {
        expect(assume).toBeInstanceOf(Function)
    })
    test(`${assume.name} should call func with first param as param iff first param is defined`, () => {
        const func = (a: number) => { return a + 1}
        expect(assume(null, func)).toBeUndefined()
        expect(assume(1, func)).toEqual(2)
        expect(assume(1, func, func)).toEqual(3)
        expect(assume(1, func, func, func, func)).toEqual(5)
    })
})
