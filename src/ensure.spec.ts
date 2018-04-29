import {ensure} from './ensure'
import {Maybe} from './Maybe'
import {nothing} from './nothing'

describe(`${ensure.name}`, function () {
    test(`${ensure.name} should be a function`, () => {
        expect(ensure).toBeInstanceOf(Function)
    })
    test(`${ensure.name} should return second value iff first param is not defined`, () => {
        expect(ensure(nothing as Maybe<number>, 1)).toEqual(1)
        expect(ensure(2, 1)).toEqual(2)
    })
});
