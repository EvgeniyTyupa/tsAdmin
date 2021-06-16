import cx from 'classnames'
import { cloneDeep, mergeWith } from 'lodash'

export function mergeStyles<T extends Record<string, string | undefined>>(
  base: T,
  ...styles: Partial<T>[]
): T {
  return mergeWith(cloneDeep(base), ...styles, (className1: string, className2: string) =>
    cx(className1, className2),
  )
}

export { cx }
