import {existing} from './existing';

export function alternate<A>(a: A, b: A): A {
    return existing(a) ? a : b
}
