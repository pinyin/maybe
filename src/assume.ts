import {existing} from './existing'

export type FromTo<A, B> = (a: NonNullable<A>) => B

export function assume<A, B>(a: A, func: FromTo<A, B>): undefined | B
export function assume<A, B, C>(a: A, f1: FromTo<A, B>, f2: FromTo<B, C>): undefined | C
export function assume<A, B, C, D>(a: A, f1: FromTo<A, B>, f2: FromTo<B, C>, f3: FromTo<C, D>): undefined | D
export function assume<A, B, C, D, E>(a: A, f1: FromTo<A, B>, f2: FromTo<B, C>, f3: FromTo<C, D>, f4: FromTo<D, E>): undefined | E
export function assume<A, B, C, D, E, F>(a: A, f1: FromTo<A, B>, f2: FromTo<B, C>, f3: FromTo<C, D>, f4: FromTo<D, E>, f5: FromTo<E, F>): undefined | F
export function assume<A, B>(a: A, ...funcs: Array<FromTo<any, any>>): undefined | B {
    return funcs.reduce((acc, curr) => existing(acc) ? curr(acc) : undefined, a)
}
