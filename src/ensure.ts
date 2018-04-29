import {existing} from './existing'

export function ensure<A>(maybe: A, defaultValue: NonNullable<A>): NonNullable<A> {
    return existing(maybe)
        ? maybe
        : defaultValue
}

