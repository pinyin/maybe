import {existing} from './existing'
import {Maybe} from './Maybe'
import {nothing} from './nothing'

export function notExisting<T>(maybe: Maybe<T>): maybe is nothing {
    return !existing(maybe)
}
