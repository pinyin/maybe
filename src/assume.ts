import {existing} from './existing'
import {Maybe} from './Maybe'
import {nothing} from './nothing'

export function assume<A, B>(a: A, func: (a: NonNullable<A>) => B): Maybe<B> {
    return existing(a) ? func(a) : nothing
}
