import {existing} from './existing'
import {Maybe} from './Maybe'
import {nothing} from './nothing'

export type FromTo<A, B> = (a: NonNullable<A>) => B

export function assume<A, B>(a: A, func: FromTo<A, B>): Maybe<B>
export function assume<A, B, C>(a: A, f1: FromTo<A, B>, f2: FromTo<B, C>): Maybe<C>
export function assume<A, B, C, D>(a: A, f1: FromTo<A, B>, f2: FromTo<B, C>, f3: FromTo<C, D>): Maybe<D>
export function assume<A, B, C, D, E>(a: A, f1: FromTo<A, B>, f2: FromTo<B, C>, f3: FromTo<C, D>, f4: FromTo<D, E>): Maybe<E>
export function assume<A, B, C, D, E, F>(a: A, f1: FromTo<A, B>, f2: FromTo<B, C>, f3: FromTo<C, D>, f4: FromTo<D, E>, f5: FromTo<E, F>): Maybe<F>
export function assume<A, B>(a: A, ...funcs: Array<FromTo<any, any>>): Maybe<B> {
    return funcs.reduce((acc, curr) => existing(acc) ? curr(acc) : nothing, a)
}
