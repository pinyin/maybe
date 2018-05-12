import {nothing} from '@pinyin/types'

export function existing<T>(maybe: T | nothing): maybe is NonNullable<T> {
    return typeof maybe !== 'undefined' && maybe !== null && !Number.isNaN(maybe as any)
}

