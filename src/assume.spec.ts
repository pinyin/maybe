import {assume} from './assume'

describe(`${assume.name}`, () => {
    test(`${assume.name} should be a function`, () => {
        expect(assume).toBeInstanceOf(Function)
    })
    test(`${assume.name} should call func with first param as param iff first param is defined`, () => {
        const func = (a: number) => { return a + 1}
        expect(assume(null, func)).toBeNull()
        expect(assume(1, func)).toEqual(2)
    })
})
