import {nothing} from '@pinyin/types'
import {existing} from './existing'
import {Maybe} from './Maybe'

export function notExisting<T>(maybe: Maybe<T>): maybe is nothing {
    return !existing(maybe)
}
